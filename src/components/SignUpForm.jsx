import React, { useState } from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log('Signing up...');
  };

  return (
    <div className={styles.signUpForm}>
      <img src="path/to/logo.png" alt="Logo" className={styles.logo} />

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

      <button className={`${styles.button} ${styles.googleSignUp}`}>Sign Up with Google</button>

      <p className={styles.text}>
        Already have an account? <a href="#" className={styles.link}>Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;
