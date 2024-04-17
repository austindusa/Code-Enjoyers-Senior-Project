import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config.js";
import SignUpButton from "./signUpButton.jsx";
import LogoutPopup from "./LogoutPopup";
import { Button } from "@chakra-ui/react";
import { colors } from "../colors";

function SignInButton() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showSignUpButton, setShowSignUpButton] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setShowSignUpButton(!currentUser);
    });

    return unsubscribe;
  }, []);

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  const onSignOut = () => {
    setUser(null);
    setShowSignUpButton(true);
    setShowLogoutPopup(false);
    navigate("/");
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 1.25rem",
    gap: "0.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "150%",
    background: colors.secondary,
    color: colors.text,
    _hover: {
      bg: colors.primary,
    },
  };

  return (
    <>
      {user ? (
        <div style={{ position: "relative" }}>
          <span style={{ cursor: "pointer" }} onClick={toggleLogoutPopup}>
            {user.email}
          </span>
          <LogoutPopup
            onSignOut={onSignOut}
            onClose={toggleLogoutPopup}
            show={showLogoutPopup}
          />
        </div>
      ) : (
        <Link to="/login">
          <Button sx={buttonStyle} size="sm">
            Sign in
          </Button>
        </Link>
      )}
      {showSignUpButton && <SignUpButton />}
    </>
  );
}

export default SignInButton;
