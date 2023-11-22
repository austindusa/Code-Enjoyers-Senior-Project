import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log('Signing up...');
  };

  return (
    <div className="sign-up-form">
      <img src="path/to/logo.png" alt="Logo" className="logo" />

      <h2>Sign Up</h2>
      
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <br></br>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleSignUp}>Sign Up</button>
      <br></br>
      <button className="google-sign-up">Sign Up with Google</button>

      <p>
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;
