import React, { useState } from "react";
import "./SignInForm.css";
import { Link, Route, useHistory, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const ForgotPasswordForm = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send password recovery email to:", email);
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
        <div>
          <button
            type="button"
            onClick={onBackToLogin}
            className="forgot-password-button"
          >
            Back to Login
          </button>
          <button type="submit" className="forgot-password-button">
            Send Recovery Email
          </button>
        </div>
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      setErrorMessage("Incorrect email or password.");
    }
  };

  return (
    <div className="background-img">
      <div className="background form-box">
        <div className="box-border">
          <form onSubmit={handleSignIn}>
            {showForgotPassword ? (
              <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
            ) : (
              <div>
                <h1>Login</h1>
                <p id="form-p">Enter Your Account Details</p>
              </div>
            )}
            {errorMessage && (
              <p style={{ color: "red", marginLeft: "25px" }}>{errorMessage}</p>
            )}
            <div id="input-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div id="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/forgotpassword">
                <button type="button" id="change-pass-btn">
                  Forgot Your Password
                </button>
              </Link>
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
