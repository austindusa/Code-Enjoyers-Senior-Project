import React, { useState, useEffect } from "react";
import CardListWindow from "../components/CardListWindow";
import ReviewContainer from "../components/reviewContainer";
import NavigationBar from "../components/navigationBar";
import "./SearchResultContainer.css";
import { useNavigate } from "react-router";
import {dummyData} from "../dummyData.js"
import styles from "../components/resultSearchComp.module.css";
import { colors } from '../colors';
import SearchResultPlaceholder from "../components/SearchResultPlaceholder";
import NoActiveSearch from "../components/NoActiveSearch";

function ResultPage() {
  const [selectedCard, setSelected] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  //useEffect(() => {
    //const hasPaid = localStorage.getItem("hasPaid") === "true";
    //if (!hasPaid) {
      //navigate("/");
    //}
  //}, [navigate]);
  
  

  const backgroundStyle = {
    backgroundColor: "rgb(240, 254, 240)",
    paddingBottom: '1.5rem'
  }

  const horizontalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "auto",
    color: "rgb(240, 254, 240)",
  };

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
    color: "rgb(240, 254, 240)",
  };

  const handleCardClick = (dummyData) => {
    setSelected(dummyData);
  }

  const [surveys, setSurveys] = useState(dummyData)
  const [searchResults, setSearchResults] = useState(dummyData)

  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) return setSearchResults(surveys)

    const resultsArray = surveys.filter(post => post.organizationName.includes(value) || post.externshipTitle.includes(value) 
    || post.location.includes(value) || post.description.includes(value))

    setSearchResults(resultsArray)
  }

  return (
    <div>
      <div style={backgroundStyle}>
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
              value={searchTerm}
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
      </div>
      <div className="result-container">
       {searchResults.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              
                {searchTerm !== "" ? <SearchResultPlaceholder searchTerm={searchTerm} /> : <NoActiveSearch/>}
            </div>
          ) : (
            <div style={{
              display: 'flex',
              gap: '4rem'
            }}>
               <CardListWindow onCardClick={handleCardClick} searchResults={searchResults} />
                <div className="detailed-result-container">
                  {selectedCard && <ReviewContainer cardData={selectedCard} />}
                </div>
            </div>
           
          )}
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default ResultPage;
