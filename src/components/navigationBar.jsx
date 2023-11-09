import React from "react";
import logo from '../images/logo.svg';
import SignInButton from './signInButton';
import SignUpButton from './signUpButton';

function NavigationBar() {
    const navigationStyle = {
        display: 'flex',
        height: '3.25rem',
        padding: '0rem 4rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid var(--Black, #060606)',
        background: 'var(--White, #FFF)',

      };

    const navigate = (url) =>
    {
        window.location.href = url;
    };

    const innerContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
    }

    const clickableComponentsStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    }

    const signInStyle = {
        background: 'black',
        color: 'white',
        border: '2px solid black', 
        padding: '10px 20px',
    };
    
    const signUpStyle = {
        background: 'white',
        color: 'black',
        border: '2px solid black',
        padding: '10px 20px', 
    };
    

    return (
        <div style={navigationStyle}>
            <div style={innerContainerStyle}>
                <img src={logo} alt="Logo" className="logo" />
                <div style={clickableComponentsStyle}>
                    <lable>Home</lable>
                    <label>Add Externship</label>
                    <SignInButton />
                    <SignUpButton />
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;