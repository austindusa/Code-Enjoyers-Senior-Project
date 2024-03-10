import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged,getAuth } from 'firebase/auth';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';
import { auth } from '../firebase/config'; 
import styles from './SignUpForm.module.css'; 

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const authInstance = getAuth();

    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        // User logged in
        if (user.emailVerified) {
          // Update the emailVerified in Firestore
          const userDocRef = doc(getFirestore(), 'users', user.uid);
          updateDoc(userDocRef, { emailVerified: true })
            .then(() => {
              console.log('Firestore updated with email verification');
            })
            .catch((error) => {
              console.error('Error updating email verification in Firestore:', error);
            });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  function handleCredentialsChange(e) {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  function handleSignup(e) {
    e.preventDefault();
    if (isLoading) return;

    if (userCredentials.password !== userCredentials.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        // User created, now send a verification email
        sendEmailVerification(userCredential.user)
          .then(() => {
            alert('Verification email sent. Please check your email to verify your account.');
          })
          .catch((verificationError) => {
            setError(verificationError.message);
          });
      })
      .catch((signupError) => {
        setError(signupError.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className={styles.signUpForm}>
      <div><img src="path/to/logo.png" alt="Logo" className={styles.logo} /></div>
      <h2 className={styles.heading}>Sign Up</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSignup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          value={userCredentials.email}
          onChange={handleCredentialsChange}
          required
        />
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.input}
          value={userCredentials.password}
          onChange={handleCredentialsChange}
          required
        />
        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className={styles.input}
          value={userCredentials.confirmPassword}
          onChange={handleCredentialsChange}
          required
        />
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      {/* Google Sign-Up button */}
      <p className={styles.text}>
        Already have an account? <a href="/login" className={styles.link}>Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;