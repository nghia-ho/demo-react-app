import React, { useState } from "react";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      <button type="submit">search</button>
    </>
  );
};

export default Search;
