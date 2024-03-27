import React, { useState } from "react";
import imgHolder from "../images/imageHold.jpeg";
import { useNavigate } from "react-router-dom";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import NavigationBar from "./navigationBar";

const SurveyPlanPage = () => {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/pay-pal-checkout");
  }

  const [isCheckout, setIsCheckout] = useState(false); // State to manage the navigation simulation
  if (isCheckout) {
    return <PaypalCheckoutButton />; // Show the PayPal checkout page if isCheckout is true
  }

  return (
    <div>
      <NavigationBar />
      <div style={surveyPlanPageStyle}>
        <img src={imgHolder} alt="Image Holder" style={imgHolderStyle} />
        <h2 style={headingStyle1}>
          <span>Join Our Audiology</span>
          <span>Survey Community</span>
        </h2>
        <h2 style={headingStyle2}>Audiology Membership Plan</h2>
        <h3 style={headingStyle5}>Unlock the Power of Externship Reviews</h3>
        <h2 style={headingStyle3}>
          $1 <span style={slashMStyle}>/ Month</span>
        </h2>
        <div style={lineStyle} />
        <h3 style={includedTextStyle}>Why Subscribe?</h3>
        <p style={listStyle1}>
          Enjoy the freedom to access an unlimited number of reviews, receiving
          continuous and comprehensive feedback from users to stay informed.
          Plus, take control of your subscription with the flexibility to pause
          or cancel anytime, allowing unlimited users to benefit from this
          exceptional service.
        </p>
        <button style={buttonStyle} onClick={handleGetStarted}>
          SUBSCRIBE
        </button>
      </div>
      <div className="header">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const surveyPlanPageStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "4.25rem 4rem 5.875rem",
  isolation: "isolate",
  position: "absolute",
  width: "89.875rem",
  left: "0.125rem",
  top: "8.25rem",
  background: "#FFFFFF",
};

const imgHolderStyle = {
  position: "absolute",
  width: "31.25rem",
  height: "25rem",
  top: "-35px",
  left: "19%",
  transform: "translateX(-50%)",
};

const headingStyle1 = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "541px",
  height: "156px",
  left: "46px",
  top: "350px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle2 = {
  position: "absolute",
  width: "900px",
  height: "200px",
  left: "766px",
  top: "-85px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle3 = {
  position: "absolute",
  left: "766px",
  top: "90px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle5 = {
  position: "absolute",
  left: "766px",
  top: "0.5px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1.5rem",
  lineHeight: "120%",
  color: "#060606",
  letterSpacing: "-0.2px",
};
const slashMStyle = {
  fontSize: "35px",
  marginBottom: "40px",
};

const buttonFilledStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px 24px",
  gap: "10px",
  isolation: "isolate",
  position: "absolute",
  width: "140px",
  height: "20px",
  left: "766px",
  top: "10px",
  background:
    "linear-gradient(273.22deg, #000000 4.74%, rgba(162, 129, 134, 0.58) 103.12%)",
  borderRadius: "100px",
};

const lineStyle = {
  position: "absolute",
  width: "636px",
  height: "0px",
  left: "766px",
  top: "220px",
  border: "1px solid #000000",
  transform: "rotate(0.23deg)",
};

const headingStyle4 = {
  position: "absolute",
  width: "581px",
  height: "171px",
  left: "766px",
  top: "calc(21% - 171px/2 + 48px)",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "120%",
  color: "#060606",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const buttonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 50px",
  fontSize: "1.2rem",
  gap: "8px",
  position: "absolute",
  width: "20rem",
  height: "3rem",
  left: "770px",
  top: "450px",
  background: "#E5A35C",
  color: "#FFFFFF",
  border: "1px solid #000000",
  borderRadius: "18px",
  cursor: "pointer",
  border: "none",
  Transition: "background-color 0.3s ease",
};

const includedTextStyle = {
  position: "absolute",
  width: "auto",
  height: "auto",
  left: "766px",
  top: "240px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.5rem",
  lineHeight: "120%",
  color: "#060606",
};

const listStyle1 = {
  position: "absolute",
  left: "47.875rem",
  top: "18.125rem",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.2rem",
  lineHeight: "120%",
  color: "#060606",
  marginBottom: "0.625rem",
  listStyle: "none",
  marginRight: "55px",
};

export default SurveyPlanPage;
