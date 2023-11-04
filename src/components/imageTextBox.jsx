import React from "react";
import imgHolder from '../images/imageHold.jpeg';
import Cube from '../images/cube.png';

function ImageTextBox() {
  const textBoxStyle = {
    display: "flex",
    backgroundColor: "#f3f3f3",
    padding: "2%",
    border: "1px solid #ddd",
    maxWidth: "100%",
    maxHeight: "100%", 
  };
  
  const headStyle = {
    marginTop: "8%",
    marginLeft: "10%",
    fontSize: "1vw",
  };
  
  const bodyStyle = {
    marginLeft: "10%",
    fontSize: "3.5vw",
  };
  
  const parStyle = {
    marginLeft: "10%",
    fontSize: "1.35vw",
  };

  const imgStyle = {
    marginTop: "3%",
    marginLeft: "5%",
    marginBottom: "5%",
    width: "40%", 
    height: "auto", 
    maxWidth: "100%",
    maxHeight: "100%",
  };
  
  const cubeStyle = {
    marginLeft: "10%",
    marginTop: "2.5%",
    width: "7%",
    height: "auto",
    maxWidth: "100%",
  };
  
  const secondCubeStyle = {
    marginLeft: "40%",
    marginTop: "0.5%",
    width: "7%",
    height: "auto",
    maxWidth: "100%",
  };
  
  const textCube = {
    marginLeft: "10%", 
    fontSize: "1.5vw",
  };
  
  const secondTextCube = {
    marginLeft: "57%", 
    marginTop: "-8%",
    fontSize: "1.5vw",
  };
  
  const paraText = {
    marginLeft: "10%", 
    fontSize: "0.7vw", 
  };
  
  const secondParaText = {
    marginLeft: "57%", 
    marginTop: "1%", 
    fontSize: "0.7vw", 
  };
  
  const startButton = {
    marginLeft: "10%", 
    marginTop: "5%", 
    width: "15%",
    height: "6%",
    fontSize: "0.7vw", 
  };
  
  return (
    <div style={textBoxStyle}>
      <img style={imgStyle} src={imgHolder} alt="Image Holder" />
      <div style={{ flex: "1", padding: "0 20px" }}>
        <h1 style={headStyle}>Discover</h1>
        <h1 style={bodyStyle}>Join Our Community And Help Others Advance Their Careers</h1>
        <p style={parStyle}>
          Rate my Externship is a platform built to help you explore a world of externship opportunities and make informed choices. Join our community and help others advance their careers by discovering the perfect externship for you and sharing your valuable externship experience with a supportive network of professionals.
        </p>
        <img style={cubeStyle} src={Cube} alt="Cube" />
        <img style={secondCubeStyle} src={Cube} alt="Cube" />
        <h1 style={textCube}>Find</h1>
        <p style={paraText}>Find the Perfect Externship for You</p>
        <h1 style={secondTextCube}>Share</h1>
        <p style={secondParaText}>Share Your Valuable Externship Experiences with Others</p>
        <button style={startButton}>Get Started</button>
      </div>
    </div>
  );
}

export default ImageTextBox;
