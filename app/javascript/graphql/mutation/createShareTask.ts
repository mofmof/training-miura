import { gql } from "@apollo/client";

export default gql`
  mutation createShareTask($userId: ID!, $taskId: ID!) {
    createShareTask(input: { userId: $userId, taskId: $taskId }) {
      userId
      taskId
    }
  }
`;
