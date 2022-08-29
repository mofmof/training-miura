import { gql } from "@apollo/client";

export default gql`
  mutation createTask($params: TaskAttributes!) {
    createTask(input: { params: $params }) {
      task {
        id
        title
        body
      }
    }
  }
`;
