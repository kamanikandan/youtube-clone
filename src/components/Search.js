import React, { useState } from "react";

const Search = ({ getsearchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    getsearchText(text);
  };

  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <input
          placeholder="Search YouTube Videos here..."
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          type="text"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
