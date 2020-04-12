import React from "react";
import Search from "./Search";

const Header = ({ getsearchText }) => {
  return (
    <header className="row app-header">
      <div className="container">
        <div className="container-wrapper">
          <h1 onClick={() => getsearchText("")}>
            <span>YouTube</span>Clone
          </h1>
          <Search getsearchText={getsearchText} />
        </div>
      </div>
    </header>
  );
};

export default Header;
