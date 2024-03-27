import React, { useState } from "react";
import "./SignInForm.css";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignInForm() {
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
      localStorage.setItem("isLoggedIn", "true");
      navigate("/SurveyPlanPage");
    } catch (error) {
      setErrorMessage("Incorrect email or password.");
    }
  };

  return (
    <div className="background-img">
      <div className="background form-box">
        <div className="box-border">
          <form onSubmit={handleSignIn}>
            <div>
              <Link to="/" className="logo-link">
                <img src="path/to/logo.png" alt="Logo" className="logo" />
              </Link>
              <h1>Login</h1>
              <p id="form-p">Enter Your Account Details</p>
            </div>

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
              <button
                type="button"
                id="change-pass-btn"
                // onClick={handleForgotPassword}
              >
                Forgot Your Password
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
