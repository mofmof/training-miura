import { gql } from "@apollo/client";

export default gql`
  mutation removeLabelFromTask($taskId: ID!, $labelId: ID!) {
    removeLabelFromTask(input: { taskId: $taskId, labelId: $labelId }) {
      taskLabel {
        id
      }
    }
  }
`;
