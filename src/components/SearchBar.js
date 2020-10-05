import React, { useState } from 'react';

const SearchBar = ({ searchHandler }) => {
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler(query);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={(e) => submitHandler(e)}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
