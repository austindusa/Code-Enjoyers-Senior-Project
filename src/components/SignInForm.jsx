export default function SignInForm() {
  return (
    <from>
      <div>
        <div>
          <h1>Login</h1>
          <p>Enter Your Account Details</p>
        </div>

        <p>
          <label>Email</label>
          <input type="email" required />
        </p>

        <div>
          <label>Password</label>
          <input type="password" required />
          <button>Forgot Your Password?</button>
        </div>
        <div>
          <button>Login</button>
          <button>G Login with Google</button>
        </div>
        <span>
          <p>Don't have an account?</p>
          <button>Sign Up</button>
        </span>
      </div>
    </from>
  );
}
