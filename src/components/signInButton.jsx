import React from "react";

function SignInButton() {

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem 1.25rem',
        gap: '0.5rem',
        fontFamily: 'Roboto',
        fontSize: '0.625rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',

        background: 'var(--Black, #060606)',
        color: 'var(--White, #ffffff)',
    }

    return (
        <button style={buttonStyle}>
            Sign In
        </button>
    )
}

export default SignInButton