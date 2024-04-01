import React, { useState } from "react";
import CardListWindow from "../components/CardListWindow";
import ReviewContainer from "../components/reviewContainer";
import NavigationBar from "../components/navigationBar";
import BookmarkToggle from "../components/bookmarkToggle";
import "./SearchResultContainer.css";
import { useNavigate } from "react-router";
import {dummyData} from "../dummyData.js"
import styles from "../components/resultSearchComp.module.css";

function ResultPage() {
  const [selectedCard, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hasPaid = localStorage.getItem("hasPaid") === "true";
    if (!hasPaid) {
      navigate("/");
    }
  }, [navigate]);

  const horizontalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "auto",
  };

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
  };

  const handleCardClick = (dummyData) => {
    setSelected(dummyData);
  }

  const [surveys, setSurveys] = useState(dummyData)
  const [searchResults, setSearchResults] = useState(dummyData)

  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(surveys)

    const resultsArray = surveys.filter(post => post.organizationName.includes(e.target.value) || post.externshipTitle.includes(e.target.value) 
    || post.location.includes(e.target.value) || post.description.includes(e.target.value))

    setSearchResults(resultsArray)
  }

  return (
    <div>
      <NavigationBar />
      <div style={horizontalStyle}>
        <div className={styles.container}>
          <div className={styles.searchBar} onSubmit={handleSubmit}>
            <i className={styles.searchIcon}></i>
            <input
              className={styles.searchInput}
              type = "text"
              name = "search"
              placeholder = "Search"
              onChange={handleSearchChange}
            />
            <button className="searchButton">
            </button>
            <input
              className={styles.locationInput}
              type="text"
              placeholder="Location"
            />
          </div>
        </div>
        <div style={centerStyle}>
          <BookmarkToggle />
        </div>
      </div>
      <div className="result-container">
        <CardListWindow onCardClick={handleCardClick} searchResults={searchResults} />
        <div className="detailed-result-container">
          {selectedCard && <ReviewContainer cardData={selectedCard} />}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
