import { gql } from '@apollo/client';

export const CREATE_TODO_MUTATION = gql`
  mutation createTodo($name: String!, $completed: Boolean!) {
    createTodo(input: { name: $name, completed: $completed }) {
      name
      completed
    }
  }
`;
