import { gql } from "@apollo/client";

export default gql`
  query shareUsers($id: ID!) {
    shareUsers(id: $id) {
      id
      name
    }
  }
`;
