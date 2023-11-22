import React, { useRef } from "react";
import styles from "./searchComponent.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.container.H1}>
          Find and Rate Your <br />
          Dream Externships
        </h1>
        <p className={styles.containerP}>
          Discover the best externships and share your experiences with others.
        </p>
      </div>
      <div className={styles.searchBar}>
        <i className={styles.searchIcon}></i>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <input
          className={styles.locationInput}
          type="text"
          placeholder="Location"
        />
      </div>
    </div>
  );
}

export default SearchBar;

