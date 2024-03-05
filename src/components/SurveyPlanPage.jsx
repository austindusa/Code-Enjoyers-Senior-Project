import React from "react";
import imgHolder from '../images/imageHold.jpeg';

const SurveyPlanPage = () => {
    return (
      <div style={surveyPlanPageStyle}>
        <img src={imgHolder} alt="Image Holder" style={imgHolderStyle} />
        <h2 style={headingStyle1}>
          <span>Join Our Audiology</span> 
          <span>Survey</span>
          <span>Community</span>
        </h2>
        <h2 style={headingStyle2}>Membership</h2>
        <h2 style={headingStyle3}>$1,500<span style={slashMStyle}>/m</span></h2>
        <div style={buttonFilledStyle}>
          <span style={monthlyStyle}>Monthly</span>
        </div>
        <div style={lineStyle} />
        <h3 style={headingStyle4}>Pause Or Cancel nytime</h3>
        <h3 style={includedTextStyle}>What's included</h3>
        <ul style={listStyle}>
          <li>Unlimited Reviews</li>
          <li>Feedbacks</li>
          <li>Unlimited Users</li>
          <li>Pause or cancel anytime</li>
        </ul>
        <button style={buttonStyle}>
          Get Started
        </button>
      </div>
    );
};

const surveyPlanPageStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "68px 64px 94px",
  gap: "80px",
  isolation: "isolate",
  position: "absolute",
  width: "1438px",
  height: "817px",
  left: "2px",
  top: "84px",
  background: "#FFFFFF",
};

const imgHolderStyle = {
    position: "absolute",
    width: "500px", 
    height: "400px", 
    top: "-50px",
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
  width: "581px",
  height: "200px",
  left: "766px",
  top: "-100px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle3 = {
  position: "absolute",
  width: "581px",
  height: "104px",
  left: "766px",
  top: "70px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "120%",
  color: "#060606",
};

const slashMStyle = {
  fontSize: "24px", 
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
  background: "linear-gradient(273.22deg, #000000 4.74%, rgba(162, 129, 134, 0.58) 103.12%)",
  borderRadius: "100px",
};

const monthlyStyle = {
  position: "absolute",
  width: "72px",
  height: "24px",
  left: "60px",
  bottom: "15px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
  textAlign: "center",
  color: "#ECECEC",
};

const lineStyle = {
  position: "absolute",
  width: "636px",
  height: "0px",
  left: "766px",
  top: "240px",
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
    padding: "12px 24px",
    gap: "8px",
    position: "absolute",
    width: "141px",
    height: "52px",
    left: "770px",
    top: "400px",
    background: "#000000",
    color: "#FFFFFF", 
    border: "1px solid #000000",
  };

const includedTextStyle = {
  position: "absolute",
  width: "auto",
  height: "auto",
  left: "766px",
  top: "250px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "120%",
  color: "#060606",
};

const listStyle = {
  position: "absolute",
  left: "766px",
  top: "290px", 
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "120%",
  color: "#060606",
};

export default SurveyPlanPage;
