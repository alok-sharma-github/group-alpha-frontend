import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
