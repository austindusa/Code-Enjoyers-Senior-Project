import React, { useRef } from "react";
import styles from "./HeroSectionStyle";
import heroImage from "../images/markPaton1.jpg";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div style={styles.container}>
      <div style={styles.textBox}>
        <h1 style={styles.heading}>
        Find & Share Your <br />
        Audiology Externships
        </h1>
        <p style={styles.paragraph}>
        Discover what your peers feel about their externship experience and <br />
        share your experiences with others.
        </p>
        <div style={styles.buttonContainerStyle}>
        <Link to="/signup"><Button style={styles.actionButtonStyle} size='lg' >Get Started</Button></Link>
        </div>
        
      </div>

      <div style={styles.container}>
        <img src={heroImage} style={styles.heroImage} alt="Mark Paton"/>  
      </div>
    </div>
  );
}

export default HeroSection;

