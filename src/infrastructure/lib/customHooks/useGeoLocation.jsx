/**
 * lib: useGeolocation
 * author: Favour George
 * Date: June 30, 2020
 * Get user's location
 **/

import {useEffect, useState} from 'react';
import {GEO_IP_URI} from '../../config/endpoints.config';

/**
 * useGeoLocation returns user's location and ip address.
 * If user denies browser geolocation api access, a failsafe
 * fetch call is made to obtain IP address info
 */
export const useGeoLocation = () => {
  const initialState = {
    geolocation: {},
    error: null
  }
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let isSubscribed = true;
    // Try to communicate with Third-Party Geolocation API
    fetch(GEO_IP_URI)
      .then(response => response.json())
      .then(data => isSubscribed ? setState(prevState => ({
        ...prevState, geolocation: data
      })) : null)
      .catch(() => {
        if (isSubscribed) {
          if (!navigator.geolocation) return setState(prevState => ({
            ...prevState,
            error: "Geolocation is not supported by your device!"
          }));

          // Fire up the browser navigator api when third-party look-up fails
          navigator.geolocation.getCurrentPosition(onSuccessfulLookup, onFailedLookup)
        }
      })

    // Successful geolocation lookup
    function onSuccessfulLookup({coords}) {
      setState(prevState => ({
        ...prevState, geolocation: coords
      }))
    }

    // Unsuccessful geolocation lookup
    function onFailedLookup(error) {
      setState(prevState => ({
        ...prevState, error
      }));
    }

    // Clean up the subscription to the effect
    return () => (isSubscribed = false)
  }, []);

  return state
}