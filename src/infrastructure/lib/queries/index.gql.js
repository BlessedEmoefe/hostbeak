import { gql } from "@apollo/client";

export const LOGOUT = gql`
  mutation onLogout {
    adminLogout
  }
`;

export const CURRENT_ADMIN = gql`
  query onGetCurrentAdmin($random: String) {
    getCurrentAdmin (random: $random) {
      _id
      code
      email
      phone
      isOnline
      location
      lastSeen
      isActive
      fullName
      createdAt
      isVerified
      isVerified
      accountType
      adminProfile {
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
