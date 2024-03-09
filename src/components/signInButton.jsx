import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import SignUpButton from "./signUpButton.jsx";

function SignInButton() {
    const [user, setUser] = useState(null);
    const [showSignUpButton, setShowSignUpButton] = useState(true); 
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setShowSignUpButton(false); 
            } else {
                setUser(null);
                setShowSignUpButton(true); 
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null); 
                setShowSignUpButton(true); // Show the sign-up button when the user signs out
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    const openLogoutPopup = () => {
        setShowLogoutPopup(true);
    };

    const closeLogoutPopup = () => {
        setShowLogoutPopup(false);
    };

    const confirmLogout = () => {
        handleSignOut();
        closeLogoutPopup();
    };

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
    };

    return (
        <>
            {user ? (
                <>
                    <span style={{ cursor: "pointer" }} onClick={openLogoutPopup}>{user.email}</span>
                    {showLogoutPopup && (
                        <div className="logout-popup">
                            <p>Logout?</p>
                            <button onClick={confirmLogout}>Yes</button>
                            <button onClick={closeLogoutPopup}>No</button>
                        </div>
                    )}
                </>
            ) : (
                <Link to="/login"><button style={buttonStyle}>Sign in</button></Link>
            )}
            {showSignUpButton && <SignUpButton />}
        </>
    );
}

export default SignInButton;
