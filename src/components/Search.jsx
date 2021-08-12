import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_TODOS_QUERY } from '../gql/queries';

function Search() {
  const [getTodo, { loading, data }] = useLazyQuery(GET_TODOS_QUERY);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    getTodo({ variables: { id: search } });
  };

  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type='text'
          placeholder='search...'
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default Search;
