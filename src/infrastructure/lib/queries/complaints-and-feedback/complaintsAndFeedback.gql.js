import {gql} from '@apollo/client';

export const GET_COMPLAINTS = gql`
  query {
    adminAllTickets(page: 1) {
      docs {
        _id
        tickNumber
        userId
        status
        subject
        department
        message
      }
      totalDocs
      hasPrevPage
      hasNextPage
      totalPages
      page
      pagingCounter
    }
  }
`;

export const GET_FEEDBACK = gql`
  query {
    getAllFeedBacks {
      title
      description
      senderName
      createdAt
      senderId
    }
  }
`;

export const GET_FEEDBACK_SENDER = gql`
  query($senderId: ID) {
    getFeedBackSender(senderId: $senderId){
      firstName
      lastName
      address
      gender
      nationality
      social_accounts{
        name
        url
      }
    }
  }
`;
