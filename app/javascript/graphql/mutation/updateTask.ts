import { gql } from "@apollo/client";

export default gql`
  mutation updateTask($id: ID!, $params: TaskAttributes!) {
    updateTask(input: { id: $id, params: $params }) {
      task {
        id
        title
        body
<<<<<<< HEAD
        limitAt
        state
=======
        limitOn
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
      }
    }
  }
`;
