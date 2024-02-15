import React, { useState } from "react";
import CardListWindow from "../components/CardListWindow";
import ReviewContainer from "../components/reviewContainer";
import NavigationBar from "../components/navigationBar";
import ResultSearchBar from "../components/resultSearchComp";
import BookmarkToggle from "../components/bookmarkToggle";

function ResultPage() {
  const [selectedCard, setSelected] = useState(null);

  const horizontalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
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
      <div style={horizontalStyle}>
        <CardListWindow onCardClick={handleCardClick} />
        {selectedCard && <ReviewContainer cardData={selectedCard} />}
      </div>
    </div>
  );
}

export default ResultPage;
