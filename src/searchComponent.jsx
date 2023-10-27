import React, { useRef } from "react";

function SearchBar() {
  return (
    <div className="container">
      <div>
        <h1>
          Find and Rate Your <br />
          Dream Externships
        </h1>
        <p>
          Discover the best externships and share your experiences with others.
        </p>
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input className="search-input" type="text" placeholder="Search" />
        <input className="location-input" type="text" placeholder="Location" />
      </div>
    </div>
  );
}

export default SearchBar;
