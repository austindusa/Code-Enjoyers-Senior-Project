


import React, { useState } from 'react';

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUp = () => {
  
    console.log('User Registration Data:', userData);

    // reset the form after registration if needed
    setUserData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

