/*
 * component: Apollo Query
 * author: chigozie Ezechukwu
 * Date: August 4th, 2020
 * EmBED Super Admin Settings Page
 */

import { gql } from "@apollo/client";

// mutation

export const UPDATE_ADMIN_PROFILE = gql`
  mutation onUpdateAdminProfile(
    $fullName: String
    $address: String
    $gender: personGender
    $nationality: String
    $Bio: String
    $state: String
    $social_accounts: [input_social_accounts]
  ) {
    updateAdminPersonProfile(
      data: {
        fullName: $fullName
        address: $address
        gender: $gender
        nationality: $nationality
        Bio: $Bio
        state: $state
        social_accounts: $social_accounts
      }
    )
  }
`;
