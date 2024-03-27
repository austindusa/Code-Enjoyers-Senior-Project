import React, { useEffect, useState } from "react";
import CardListWindow from "../components/CardListWindow";
import ReviewContainer from "../components/reviewContainer";
import NavigationBar from "../components/navigationBar";
import ResultSearchBar from "../components/resultSearchComp";
import BookmarkToggle from "../components/bookmarkToggle";
import "./SearchResultContainer.css";
import { useNavigate } from "react-router";

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

  const handleCardClick = (cardData) => {
    setSelected(cardData);
  };

  return (
    <div>
      <NavigationBar />
      <div style={horizontalStyle}>
        <ResultSearchBar />
        <div style={centerStyle}>
          <BookmarkToggle />
        </div>
      </div>
      <div className="result-container">
        <CardListWindow onCardClick={handleCardClick} />
        <div className="detailed-result-container">
          {selectedCard && <ReviewContainer cardData={selectedCard} />}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
