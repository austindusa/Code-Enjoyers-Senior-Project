import React from "react";

function GetStartedButton() {

    const buttonStyle = {
        display: 'flex',
        padding: '0.75rem 1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid var(--Black, #060606)',
        color: 'var(--Black, #060606)',
    }

    return (
        <button className={"getStarted"} style={buttonStyle}>
            Get Started
        </button>
    )
}

export default GetStartedButton