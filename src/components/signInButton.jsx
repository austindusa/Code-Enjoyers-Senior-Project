import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

function SignInButton() {
    const [user, setUser] = useState(null);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null); 
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    const toggleLogoutButton = () => {
        setShowLogoutButton(!showLogoutButton);
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
                    {showLogoutButton ? (
                        <button onClick={handleSignOut}>Logout</button>
                    ) : (
                        <span onClick={toggleLogoutButton}>{user.email}</span>
                    )}
                </>
            ) : (
                <Link to="/login"><button style={buttonStyle}>Sign in</button></Link>
            )}
        </>
    );
}

export default SignInButton;
