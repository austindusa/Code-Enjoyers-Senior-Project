import "./SignInForm.css";

export default function SignInForm() {
  return (
    <div className="background-img">
      <div className="background  form-box ">
        <div className="box-border">
          <from>
            <div>
              <h1>Login</h1>
              <p id="form-p">Enter Your Account Details</p>
            </div>
            <div id="input-field">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div id="input-field">
              <label>Password</label>
              <input type="password" required />
              <button id="change-pass-btn">Forgot Your Password?</button>
            </div>
            <div id="log-in-btn">
              <button id="login">Login</button>
              <button id="login-google-btn">Login with Google</button>
            </div>
            <span id="sign-up-btn">
              <span>Don't have an account?</span>
              <button>Sign Up</button>
            </span>
          </from>
        </div>
      </div>
    </div>
  );
}
