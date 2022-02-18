import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {

  const [query, setQuery] = useState('')

  const handleClick = () => {
    axios.get(`http://localhost:8080/query/${query}`)
    .catch((r) => {
      console.log(r)
    });

    setQuery('');
  }

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} type='search'></input>
      <button onClick={handleClick}>go</button>
    </div>
  )
}

export default Search;