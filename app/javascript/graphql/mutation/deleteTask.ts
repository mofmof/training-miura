import { gql } from "@apollo/client";

export default gql`
  mutation deleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      id
    }
  }
`;
