import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");

  function handleCredentiales(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className={`${styles.signUpForm} container`}>
      <Link to="/" className={styles.logoLink}>
        <img src="path/to/logo.png" alt="Logo" className={styles.logo} />
      </Link>

      <h2 className={styles.heading}>Sign Up</h2>

      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        onChange={(e) => {
          handleCredentiales(e);
        }}
        type="email"
        name="email"
        id="email"
        className={styles.input}
      />

      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        onChange={(e) => {
          handleCredentiales(e);
        }}
        type="password"
        name="password"
        id="password"
        className={styles.input}
      />

      <label htmlFor="confirmPassword" className={styles.label}>
        Confirm Password
      </label>
      <input
        onChange={(e) => {
          handleCredentiales(e);
        }}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className={styles.input}
      />

      <button
        onClick={(e) => {
          handleSignup(e);
        }}
        className={styles.button}
      >
        Sign Up
      </button>
      <br />
      {error && <div className="error">{error}</div>}

      <button className={`${styles.button} ${styles.googleSignUp}`}>
        Sign Up with Google
      </button>
      <br />
      <p className={styles.text}>
        Already have an account?{" "}
        <a href="#" className={styles.link}>
          Log in
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
