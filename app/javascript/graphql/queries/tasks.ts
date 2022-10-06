import { gql } from "@apollo/client";

export default gql`
  query tasks($title: String!, $first: Int) {
    tasks(title: $title, first: $first) {
      nodes {
        id
        title
        body
        state
        limitOn
      }
    }
  }
`;

// export default gql`
//   query tasks($title: String!, $first: Int) {
//     tasks(title: $title, first: $first) {
//       id
//       title
//       body
//       state
//       limitOn
//     }
//   }
// `;
