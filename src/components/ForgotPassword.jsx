import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/config'; 
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal).then(data=>{
      alert("Check your email")
      navigate("/login")
  }).catch(err=>{
      alert(err.code)
  })
  };
   
  return (
    <div className="background-img">
      <div className="background form-box">
        <div className="box-border-fp">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <h1>Forgot Password</h1>
                <p id="form-p">Please Enter Your Email Address:</p>
            </div>
            <div id="input-field-fp">
              <label>Email</label>
              <input 
                name="email"
                required 
              />
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
  )
}
export default ForgotPassword;