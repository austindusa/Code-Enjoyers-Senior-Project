import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
//import axios from "axios";

export default function CardListWindow({ onCardClick, searchResults }) {
  /*const [infos, setInfo] = useState([]);

  useEffect(() => {
    console.log('infotype', typeof infos);
    cardData();
  }, []);

  const cardData = async() => {
    const result= await axios.get("http://localhost:8080/api/v2/infos");
    setInfo(result.data);
  };

  /*return(
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
}*/


  const cards = searchResults.length;

  const windowStyle = {
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
    onCardClick(searchResults);
  }, []);

  const cardsArray = Array.from({ length: cards }, (_, index) => (
      <Card
        key = {searchResults[index].id}
        organizationName = {searchResults[index].organizationName}
        externshipTitle = {searchResults[index].externshipTitle}
        location = {searchResults[index].location}
        description = {searchResults[index].description}
        onClick = {() => handleCardClick(searchResults[index].id)}
        isSelected = {searchResults[index].id === selectedCardIndex}
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
      onCardClick(searchResults);
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
  );
}

