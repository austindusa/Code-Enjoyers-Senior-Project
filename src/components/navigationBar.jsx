import React, { useState } from "react";
import logo from "../images/AudiologyLogo.png";
import SignInButton from "./signInButton";
import SignUpButton from "./signUpButton";
import AddExternship from "./AddExternship";
import { Link, useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm.jsx";
import SurveyPlanPage from "./SurveyPlanPage.jsx";
import { colors } from "../colors";

import "./navigationBar.css";
function NavigationBar() {
  const [addExternshipButton, setButtonAddExternship] = useState(false);
  const navigate = useNavigate();

  const [isUserSignedIn, setUserSignedIn] = useState(false);

  const checkUserSignIn = () => {
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

  return (
    <>
      <div className="navigationStyle">
        <div className="innerContainerStyle">
          <img src={logo} alt="Logo" className="imageStyle" />
          <div className="clickableComponentsStyle">
            <ol className="navbar-menu">
              <li id="home">
                <Link to="/">Home</Link>
              </li>

              <li id="home">
                <Link to="/SurveyPlanPage">Pricing</Link>
              </li>
              <button id="home" onClick={handleAddExternshipClick}>
                Fillout Survey
              </button>
            </ol>
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
