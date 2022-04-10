/*
 * component: Apollo Query
 * author: chigozie Ezechukwu
 * Date: August 5th, 2020
 * EmBED Super Admin Settings Page
 */

import { gql } from "@apollo/client";

export const ADMIN_CHANGE_PASSWORD = gql`
  mutation onAdminChangePassword($oldPassword: String!, $password: String!) {
    adminChangePassword(
      data: { oldPassword: $oldPassword, password: $password }
    )
  }
`;
