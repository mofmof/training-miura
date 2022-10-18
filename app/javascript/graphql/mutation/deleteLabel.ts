import { gql } from "@apollo/client";

export default gql`
  mutation deleteLabel($id: ID!) {
    deleteLabel(input: { id: $id }) {
      id
    }
  }
`;
