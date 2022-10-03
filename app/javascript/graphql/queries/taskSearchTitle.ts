import { gql } from "@apollo/client";

export default gql`
  query taskSearchTitle($title: String!) {
    tasks(title: $title) {
      id
      title
      body
      state
      limitOn
    }
  }
`;
