import React, { useContext, useState } from "react";
import Icon from "../images/Avatar Image.jpg";

function Card({
  id,
  title,
  location,
  duration,
  onClick,
  isSelected,
}) {
  const cardStyle = {
    display: "flex",
    width: "29rem",
    height: "6.4375rem",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "8px 8px",
    gap: "0.0625rem",
    background: isSelected ? "#68986f40" : "white",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };

  function handleClick() {
    onClick();
  }

  const horizontalContainer = {
    display: "flex",
    width: "11.625rem",
    alignItems: "flex-start",
    gap: "0.52125rem",
  };

  const imageStyle = {
    width: "1.92188rem",
    height: "1.875rem",
  };

  const h1Style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontsStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.25rem",
    flexShrink: "0",
    alignSelf: "stretch",
  };

  const h2Style = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "1.125rem",
    fontsStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.5rem",
  };

  const locationTextStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontsStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25rem",
  };

  const descriptionStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "0.82713rem",
    fontsStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.25rem",
    margin: "0rem",
  };

  return (
    <div className="card" style={cardStyle} onClick={handleClick}>
      <div style={horizontalContainer}>
        <img style={imageStyle} src={Icon} alt="Organization Icon" />
        <span style={h1Style}>{id}</span>
      </div>
      <span style={h2Style}>{title}</span>
      <span style={locationTextStyle}>{location}</span>
      <span style={descriptionStyle}>{duration}</span>
    </div>
  );
}

export default Card;
