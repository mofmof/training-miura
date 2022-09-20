import { gql } from "@apollo/client";

export default gql`
  mutation signUp($params: UserAttributes!) {
    signUp(input: { params: $params }) {
      user {
        id
        name
        email
      }
    }
  }
`;
