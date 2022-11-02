import { gql } from "@apollo/client";

export default gql`
  query unshareUsers($id: ID!) {
    unshareUsers(id: $id) {
      id
      name
    }
  }
`;
