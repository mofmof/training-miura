import { gql } from "@apollo/client";

export default gql`
  query taskLabels($id: ID!, $addFlg: Boolean!) {
    taskLabels(id: $id, addFlg: $addFlg) {
      id
      name
    }
  }
`;
