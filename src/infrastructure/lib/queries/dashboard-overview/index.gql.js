import {gql} from '@apollo/client';

export const OVERVIEW_DETAILS = gql`
  query onDashboardOverview {
#    countIjes
    getAdminStaffCount
    getParentsCount
    getStudentsCount
#    getTicketsCount
#    countTransactions
  }
`;