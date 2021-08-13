import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SingleTodo from './SingleTodo';
import { GET_TODOS_QUERY } from '../gql/queries';

function Search() {
  const [getTodo, { loading, data }] = useLazyQuery(GET_TODOS_QUERY);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    getTodo({ variables: { todoName: search } });
  };

  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <div>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type='text'
            placeholder='search...'
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {data && <h3>search results...</h3>}
        <ul>
          {data &&
            data.getTodos &&
            data.getTodos.length > 0 &&
            data.getTodos.map((todo) => <SingleTodo key={todo} todo={todo} />)}
        </ul>

        <pre>{data && JSON.stringify(data.getTodos)}</pre>
      </div>
    </>
  );
}

export default Search;
