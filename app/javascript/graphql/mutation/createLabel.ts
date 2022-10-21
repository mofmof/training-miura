import { gql } from "@apollo/client";

export default gql`
  mutation createLabel($name: String!) {
    createLabel(input: { name: $name }) {
      label {
        id
        name
      }
    }
  }
`;
