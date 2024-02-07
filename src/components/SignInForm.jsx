import React, { useState } from 'react';
import "./SignInForm.css";

// Separate component for Forgot Password form


const ForgotPasswordForm = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement the logic to send a password recovery email
    console.log('Send password recovery email to:', email);
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to recover your password.</p>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="button" onClick={onBackToLogin}>Back to Login</button>
        <button type="submit">Send Recovery Email</button>
      </form>
    </div>
  );
};

export default function SignInForm() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className="background-img">
      <div className="background form-box">
        <div className="box-border">
          <form>
            {showForgotPassword ? (
              <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
            ) : (
              <div>
                <h1>Login</h1>
                <p id="form-p">Enter Your Account Details</p>
              </div>
            )}
            <div id="input-field">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div id="input-field">
              <label>Password</label>
              <input type="password" required />
              <button type="button" id="change-pass-btn" onClick={handleForgotPassword}>
                Forgot Your Password?
              </button>
            </div>
            <div id="log-in-btn">
              <button id="login">Login</button>
              <button id="login-google-btn">Login with Google</button>
            </div>
            <span id="sign-up-btn">
              <span>Don't have an account?</span>
              <button>Sign Up</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
