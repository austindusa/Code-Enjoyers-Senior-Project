import React, {useState} from 'react';
import Card from './Card';
import Pagination from './Pagination';

function CardListWindow({onCardClick}){
    const cards = 34;

    const cardData = {
        organizationName: 'Example Organization',
        externshipTitle: 'Software Engineering Intern',
        location: 'San Francisco, CA',
        description: 'Exciting internship opportunity working on cutting-edge projects.',
      };

    const windowStyle = {
        display: 'flex',
        width: '40.125rem',
        height: '46.4375rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.563rem',
    };

    const cardsArray = Array.from({length: cards}, (_, index) =>(
        <Card
            key={index}
            organizationName={cardData.organizationName}
            externshipTitle={cardData.externshipTitle}
            location={cardData.location}
            description={cardData.description}
            onClick={() => onCardClick(cardData)}
        />
    ));
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = cardsArray.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
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

export default CardListWindow;
