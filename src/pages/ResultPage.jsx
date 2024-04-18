import React, { useState, useEffect } from "react";
import CardListWindow from "../components/CardListWindow";
import ReviewContainer from "../components/reviewContainer";
import NavigationBar from "../components/navigationBar";
import "./SearchResultContainer.css";
import { useNavigate } from "react-router";
import styles from "../components/resultSearchComp.module.css";
import SearchResultPlaceholder from "../components/SearchResultPlaceholder";
import NoActiveSearch from "../components/NoActiveSearch";
import { auth, db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

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
    paddingBottom: "1.5rem",
  };

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

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts);
      setSurveys(storedPosts);
      setSearchResults(storedPosts);
      setLoading(false);
    } else {
      fetchDataFromFirebase();
    }
  }, []);

  const fetchDataFromFirebase = () => {
    const getPostsFromFirebase = [];
    const subscriber = onSnapshot(collection(db, "info"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      if (getPostsFromFirebase.length > posts.length) {
        setPosts(getPostsFromFirebase);
        setSurveys(getPostsFromFirebase);
        setSearchResults(getPostsFromFirebase);
        localStorage.setItem("posts", JSON.stringify(getPostsFromFirebase));
      }
      setLoading(false);
    });
    return () => subscriber();
  };

  const handleCardClick = (dataArray) => {
    setSelected(dataArray);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) return setSearchResults(surveys);

    const resultsArray = surveys.filter((post) => {
      const question1Exists = post.question1 && post.question1.includes(value);
      const question5Exists = post.question6 && post.question6.includes(value);
      const question6Exists = post.question7 && post.question7.includes(value);

      return question1Exists || question5Exists || question6Exists;
    });

    setSearchResults(resultsArray);
  };

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
                  type="text"
                  name="search"
                  placeholder="Search by site name, state, or duration"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="searchButton"></button>
              </div>
            </div>
          </div>
          <div className="result-container">
            {searchResults.length === 0 ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                {searchTerm !== "" ? (
                  <SearchResultPlaceholder searchTerm={searchTerm} />
                ) : (
                  <NoActiveSearch />
                )}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "4rem",
                }}
              >
                <CardListWindow
                  onCardClick={handleCardClick}
                  searchResults={searchResults}
                />
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
