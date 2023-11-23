import React, {useState} from "react";
import CardListWindow from "../components/CardListWindow";
import ReviewContainer from "../components/reviewContainer";

function ResultPage(){
    const [selectedCard, setSelected] = useState(null);

    const horizontalStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto',
    }

    const handleCardClick = (cardData) => {
        setSelected(cardData);
    }

    return(
        <div style={horizontalStyle}>
        <CardListWindow onCardClick = {handleCardClick}/>
        {selectedCard && <ReviewContainer cardData = {selectedCard} />}
        </div>
    );

}

export default ResultPage;