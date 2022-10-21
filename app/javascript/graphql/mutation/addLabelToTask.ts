import { gql } from "@apollo/client";

export default gql`
  mutation addLabelToTask($taskId: ID!, $labelId: ID!) {
    addLabelToTask(input: { taskId: $taskId, labelId: $labelId }) {
      taskLabel {
        id
      }
    }
  }
`;
