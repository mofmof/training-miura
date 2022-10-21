import { gql } from "@apollo/client";

export default gql`
  query labels {
    labels {
      id
      name
    }
  }
`;
