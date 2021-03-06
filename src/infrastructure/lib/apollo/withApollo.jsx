import React from 'react'
import Head from 'next/head'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import {ApolloProvider as Provider} from '@apollo/client/react'
import {HttpLink} from '@apollo/client/link/http';
import {ApolloLink} from '@apollo/client/link/core';
import {onError} from '@apollo/client/link/error';
import fetch from 'isomorphic-unfetch'
import {ToastMessage, type} from "../../components/ToastMessage";
import {SERVER_URL} from "../../config/endpoints.config";

let apolloClient = null;

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <Provider client={client}>
          <PageComponent {...pageProps} />
        </Provider>
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const { AppTree } = ctx;
      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient(
        null,
        ctx && ctx.ctx && ctx.ctx.req && ctx.ctx.req.headers
      ));

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const {getDataFromTree} = await import('@apollo/client/react/ssr');
            await getDataFromTree(
              <AppTree pageProps={{ ...pageProps, apolloClient }} />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error.message)
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 * @param header
 */
function initApolloClient(initialState, header) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return createApolloClient(initialState, header);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param headers
 */
function createApolloClient(initialState = {}, headers) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError, operation }) => {
        if (
          graphQLErrors &&
          operation.query.definitions[0].operation === "mutation"
        ) {
          graphQLErrors.map(({ message }) => {
            return ToastMessage(
              type.ERROR,
              message.includes('Variable "$')
                ? "Error processing request please try again"
                : message
            );
          });
          return;
        }
        if (operation.query.definitions[0].operation === "mutation") {
          ToastMessage(type.ERROR, "Network error");
        }
      }),
      new HttpLink({
        uri: SERVER_URL,
        credentials: "include",
        opts: { credentials: "include" },
        fetch,
        headers: { cookie: headers && headers.cookie }
      })
    ]),
    cache: new InMemoryCache().restore(initialState)
  });
}