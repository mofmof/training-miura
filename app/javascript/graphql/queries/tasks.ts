import { gql } from "@apollo/client";

export default gql`
  query tasks {
    tasks {
      id
      title
      body
      limitOn
    }
  }
`;
