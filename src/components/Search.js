import React, { useState } from "react";

function Search( {searchQuery, setSearchQuery} ) {
  const [searchTarget, setSearchTarget] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchTarget);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTarget}
        onChange={(e) => setSearchTarget(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
