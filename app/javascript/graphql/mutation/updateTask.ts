import { gql } from "@apollo/client";

export default gql`
  mutation updateTask($id: ID!, $params: TaskAttributes!) {
    updateTask(input: { id: $id, params: $params }) {
      task {
        id
        title
        body
        limitAt
      }
    }
  }
`;
