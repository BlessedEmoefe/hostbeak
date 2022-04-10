/*
 * component: Apollo Query
 * author: chigozie Ezechukwu
 * Date: August 4th, 2020
 * EmBED Super Admin Settings Page
 */

import { gql } from "@apollo/client";

// query

export const GET_ADMIN_PROFILE = gql`
  query onGetAdminPersonProfile {
    getAdminPersonProfile {
      fullName
      address
      gender
      nationality
      bio
      state
      social_accounts {
        name
        url
      }
    }
  }
`;
