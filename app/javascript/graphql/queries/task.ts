import { gql } from "@apollo/client";

export default gql`
  query task($id: ID!) {
    task(id: $id) {
      id
      title
      body
      state
      limitOn
    }
  }
`;
