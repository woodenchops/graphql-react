import { gql } from '@apollo/client';

export const GET_ALL_TODOS_QUERY = gql`
  query {
    getAllTodos {
      name
      completed
      id
    }
  }
`;

export const GET_TODOS_QUERY = gql`
  query GetTodos($id: ID) {
    getTodos(id: $id) {
      name
      completed
    }
  }
`;
