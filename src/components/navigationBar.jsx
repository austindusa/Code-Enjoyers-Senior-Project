import React, { useState } from "react";
import logo from "../images/AudiologyLogo.png";
import SignInButton from "./signInButton";
import SignUpButton from "./signUpButton";
import AddExternship from "./AddExternship";
import { Link, useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm.jsx";
import SurveyPlanPage from "./SurveyPlanPage.jsx";
import {colors} from '../colors';

function NavigationBar() {
  const [addExternshipButton, setButtonAddExternship] = useState(false);
  const navigate = useNavigate();

  const [isUserSignedIn, setUserSignedIn] = useState(false);

  const checkUserSignIn = () => {
    // Implement your user authentication logic here
    return isUserSignedIn;
  };

  const redirectToLoginPage = () => {
    // Redirect to the login page using React Router
    navigate("/login");
  };

  const handleAddExternshipClick = () => {
    if (checkUserSignIn()) {
      // User is signed in, proceed with the Add Externship functionality
      setButtonAddExternship(true);
    } else {
      // User is not signed in, redirect to the login page
      redirectToLoginPage();
    }
  };

  const navigationStyle = {
    display: "flex",
    height: "3.25rem",
    padding: "0rem 4rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid " + colors.text,
    background: colors.background,
  };

  const innerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  };

  const clickableComponentsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  };

  const imageStyle = {
    height: '30px',
    width: '220px',
  }

  return (
    <>
      <div style={navigationStyle}>
        <div style={innerContainerStyle}>
          <img src={logo} alt="Logo" style={imageStyle} />
          <div style={clickableComponentsStyle}>
            <ul className="navbar-menu">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/SurveyPlanPage">Pricing</Link>
              </li>
              <button onClick={handleAddExternshipClick}>Add Externship</button>
            </ul>
            <SignInButton />
    
          </div>
        </div>
      </div>
      <AddExternship
        trigger={addExternshipButton}
        setTrigger={setButtonAddExternship}
      />
    </>
  );
}

export default NavigationBar;
