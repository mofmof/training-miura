import { gql } from "@apollo/client";

export default gql`
  query task($id: ID!) {
    task(id: $id) {
      id
      title
      body
<<<<<<< HEAD
      state
      limitAt
=======
      limitOn
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
    }
  }
`;
