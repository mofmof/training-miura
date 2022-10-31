import { gql } from "@apollo/client";

export default gql`
  query shareTasks($params: ShareTaskAttributes!) {
    shareTasks(params: $params) {
      edges {
        cursor
        node {
          id
          title
          body
          state
          limitOn
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
