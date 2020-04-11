import React from "react";

const SearchHeader = ({ searchText }) => {
  return (
    <div className="container">
      <h2 className="searchKey">
        Search results for: {searchText.length > 0 ? `"${searchText}"` : '""'}
      </h2>
    </div>
  );
};

export default SearchHeader;
