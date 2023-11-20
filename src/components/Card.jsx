import React from 'react';
import Icon from '../images/Avatar Image.jpg';

function Card({organizationName, externshipTitle, location, description}){
    const cardStyle = {
        display: 'flex',
        width: '32.875rem',
        height: '6.4375rem',
        padding: '0.5rem 0.5rem 0.5rem 0.5rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.0625rem',
        background: '#FFF',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    };

    const horizontalContainer = {
        display: 'flex',
        width: '11.625rem',
        alignItems: 'flex-start',
        gap: '0.52125rem',
    }

    const imageStyle = {
        width: '1.92188rem',
        height: '1.875rem',
    }

    const h1Style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '0.875rem',
        fontsStyle: 'normal',
        fontWeight: '600',
        lineHeight: '1.25rem',
        flexShrink: '0',
        alignSelf: 'stretch',
    }

    const h2Style = {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '1.125rem',
        fontsStyle: 'normal',
        fontWeight: '600',
        lineHeight: '1.5rem',
    }

    const locationTextStyle = {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '0.875rem',
        fontsStyle: 'normal',
        fontWeight: '400',
        lineHeight: '1.25rem'
    }

    const descriptionStyle = {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '0.82713rem',
        fontsStyle: 'normal',
        fontWeight: '600',
        lineHeight: '1.25rem',
        margin: "0rem",
    }

    return(
        <div style={cardStyle}>
            <div style={horizontalContainer}>
                <img style ={imageStyle} src={Icon}/>
                <text style={h1Style}>{organizationName}</text>
            </div>
            <text style={h2Style}>{externshipTitle}</text>
            <text style={locationTextStyle}>{location}</text>
            <p style={descriptionStyle}>{description}</p>
        </div>
    );
}

export default Card;