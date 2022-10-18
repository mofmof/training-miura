import { gql } from "@apollo/client";

export default gql`
  mutation removeLabelToTask($taskId: ID!, $labelId: ID!) {
    removeLabelToTask(input: { taskId: $taskId, labelId: $labelId }) {
      taskLabel {
        id
      }
    }
  }
`;
