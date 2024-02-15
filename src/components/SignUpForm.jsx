
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config.js'; // Make sure this is the initialized instance
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log('User signed up:', userCredential.user);
        // Redirect to home/dashboard or clear form
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
        // Handle errors here, such as displaying a notification
      });
  };

  return (
    <div class="container"className={styles.signUpForm}>
      <div><img src="path/to/logo.png" alt="Logo" className={styles.logo} /></div>
      
      <h2 className={styles.heading}>Sign Up</h2>
      
      <label htmlFor="email" className={styles.label}>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="password" className={styles.label}>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={styles.input}
      />

      <button onClick={handleSignUp} className={styles.button}>Sign Up</button>
      <br></br>
      <button className={`${styles.button} ${styles.googleSignUp}`}>Sign Up with Google</button>
      <br></br>
      <p className={styles.text}>
        Already have an account? <a href="#" className={styles.link}>Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;
