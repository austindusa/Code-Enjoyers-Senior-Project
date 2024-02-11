import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_3hm1b1c', 'template_hz526oq', form.current, '4WEcz8x7HdeFoSZoT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
          
        );
        e.target.reset();
      };
   
return (
    <div className="background-img">
      <div className="background form-box">
        <div className="box-border-fp">
          <form ref={form} onSubmit={sendEmail}>
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