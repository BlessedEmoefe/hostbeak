import {gql} from '@apollo/client';

export const GET_ALL_PARENTS = gql`
  query {
    getAllParents(data: { page: 1, limit: 5 }) {
      _id
      code
      email
      phone
      isOnline
      lastSeen
      children
      location
      createdAt
      updatedAt
      isVerified
      accountType
      profileData {
        bio
        state
        gender
        address
        fullName
        nationality
        profileImage
        formattedAddress
        social_accounts {
          url
          name
        }
      }
    }
  }
`;

export const GET_ALL_LEARNERS = gql`
  query onGetAllLearners {
    getAllStudents (data: { page: 1, limit: 5 }) {
      _id
      code
      email
      phone
      isOnline
      lastSeen
      location
      createdAt
      updatedAt
      isVerified
      accountType 
      profileData {
        bio
        state
        gender
        address
        fullName
        nationality
        profileImage
        formattedAddress
        social_accounts {
          url
          name
        }
      }
    }
  }
`;

// export const GET_ALL_SUBSCRIPTIONS = gql`
//   query onGetAllSubscriptions {
//     getAllSubscriptions {
//
//     }
//   }
// `;
