import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import axios from "axios";

export default function CardListWindow({ onCardClick }) {
  const [infos, setInfo] = useState([]);

  useEffect(() => {
    console.log('infotype', typeof infos);
    cardData();
  }, []);

  const cardData = async() => {
    const result= await axios.get("http://localhost:8080/api/v2/infos");
    setInfo(result.data);
  };

  return(
    <div className="container">
      <table>
        <tbody>
            {infos.map((info, index) => (
              <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{info.title}</td>
                <td>{info.location}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}


  /*const windowStyle = {
    display: "flex",
    width: "30.125rem",
    height: "46.4375rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.563rem",
  };

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    setSelectedCardIndex(0);
    onCardClick(cardData);
  }, []);

  const cardsArray = Array.from({ length: cards }, (_, index) => (
    <Card
      key={index}
      organizationName={cardData.organizationName}
      externshipTitle={cardData.externshipTitle}
      location={cardData.location}
      description={cardData.description}
      onClick={() => handleCardClick(index)}
      isSelected={index === selectedCardIndex}
    />
  ));

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cardsArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCardClick = (index) => {
    if (selectedCardIndex !== index) {
      setSelectedCardIndex(index);
      onCardClick(cardData);
    }
  };

  return (
    <div style={windowStyle}>
      {currentPosts}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cards}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );*/

