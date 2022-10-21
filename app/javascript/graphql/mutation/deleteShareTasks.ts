import { gql } from "@apollo/client";

export default gql`
  mutation deleteShareTask($userId: ID!, $taskId: ID!) {
    deleteShareTask(input: { userId: $userId, taskId: $taskId }) {
      userId
      taskId
    }
  }
`;
