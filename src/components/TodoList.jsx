import { useState, memo } from 'react';
import { GET_ALL_TODOS_QUERY } from '../gql/queries/index.js';
import { CREATE_TODO_MUTATION } from '../gql/mutations/index.js';
import { useQuery, useMutation } from '@apollo/client';
import SingleTodo from '../components/SingleTodo';

const TodoList = memo(() => {
  const { loading, error, data } = useQuery(GET_ALL_TODOS_QUERY);

  const [addTodo] = useMutation(CREATE_TODO_MUTATION);

  const [newTodo, setNewTodo] = useState({
    name: '',
    completed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('newTodo', newTodo);
    addTodo({
      variables: {
        name: newTodo.name,
        completed: newTodo.completed,
      },
      refetchQueries: [{ query: GET_ALL_TODOS_QUERY }],
    });
    setNewTodo({
      name: '',
      completed: false,
    });
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h3>All todos...</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul>
          {data.getAllTodos &&
            data.getAllTodos.length > 0 &&
            data.getAllTodos.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} />
            ))}
        </ul>
        <input
          onChange={(e) =>
            setNewTodo((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
          type='text'
          value={newTodo.name}
          placeholder='add todo'
        />
      </form>
    </>
  );
});

export default TodoList;
