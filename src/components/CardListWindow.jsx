import React from 'react';
import Card from './Card';

function CardListWindow(){
    const cardsPerPage = 6;

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

    const cardsArray = Array.from({length: cardsPerPage}, (_, index) =>(
        <Card
            key={index}
            organizationName={cardData.organizationName}
            externshipTitle={cardData.externshipTitle}
            location={cardData.location}
            description={cardData.description}
        />
    ));
    

    return(
        <div style={windowStyle}>
            {cardsArray}
        </div>
    );
}

export default CardListWindow;
