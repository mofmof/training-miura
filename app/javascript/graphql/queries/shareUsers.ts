import { gql } from "@apollo/client";

export default gql`
  query shareUsers {
    shareUsers {
      id
      name
    }
  }
`;
