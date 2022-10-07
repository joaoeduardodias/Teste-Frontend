import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query RegisteredUser($id: Number!) {
    user(where: { id: $id }) {
      name
      email
    }
  }
`
