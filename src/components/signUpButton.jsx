import React from "react";
import { Link } from "react-router-dom";

function SignUpButton() {

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

        border: '1px solid var(--Black, #060606)',
        background: 'var(--White, #ffffff',
        color: 'var(--Black, #060606)',
    }

    return (
        <Link to = "/signup"><button style = {buttonStyle}>Sign up</button></Link>
    )
}

export default SignUpButton