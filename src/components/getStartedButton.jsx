import React from "react";
import { Link } from 'react-router-dom';

function GetStartedButton() {
    const buttonStyle = {
        display: 'flex',
        padding: '1.5em 3em',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5em',
        border: '1px solid var(--Black, #060606)',
        color: 'var(--Black, #060606)',
        marginTop: '7em',
        marginLeft: '5em',
    };

    return (
        <Link to="/resultpage">
          <button className="getStarted" style={buttonStyle}>
            Get Started
          </button>
        </Link>
      );

}

export default GetStartedButton;
