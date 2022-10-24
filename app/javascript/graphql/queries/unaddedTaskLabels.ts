import { gql } from "@apollo/client";

export default gql`
  query unaddedTaskLabels($id: ID!) {
    unaddedTaskLabels(id: $id) {
      id
      name
    }
  }
`;
