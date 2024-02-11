import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {

    return (
    <div className="background-img">
      <div className="background form-box">
        <div className="box-border-fp">
          <form>
            <div>
                <h1>Forgot Password</h1>
                <p id="form-p">Please Enter Your Email Address:</p>
            </div>
            <div id="input-field-fp">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div id="send-email-btn">
              <button id="send-email">Send Email</button>
            </div>
            <span id="back-to-sign-in">
                <span>Go back to sign in?</span>
                <Link to = "/login"><button type="button">Sign In</button></Link>
            </span>
          </form>
        </div>
      </div>
    </div>
    );
}

export default ForgotPassword;