import {gql} from '@apollo/client';

export const ADD_STAFF = gql`
  mutation onAddStaff (
    $phone: String!
    $email: String!
    $roles: String
    $fullName: String!
    $accountType: adminAccountType!
  ) {
    adminAddStaff(data: {
      phone: $phone
      email: $email
      roles: [$roles]
      fullName: $fullName
      accountType: $accountType
    })
  }
`;

export const STATUS_CHANGE = gql`
  mutation onStatusChange ($staffID: ID!) {
    adminActivateOrDeactivateAdmins(_id: $staffID)
  }
`;

// QUERY

export const GET_ADMIN_STAFF = gql`
  query onGetAdminStaff {
    getAllAdminUsers {
      _id
      email
      phone
      isActive
      lastSeen
      fullName
      isOnline
      createdAt
      accountType
    }
  }
`;
