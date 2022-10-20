import { gql } from "@apollo/client";

export default gql`
  query shareTasks(
    $title: String!
    $state: String
    $first: Int
    $after: String
  ) {
    shareTasks(title: $title, state: $state, first: $first, after: $after) {
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
