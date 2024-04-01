import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { confirmPasswordReset } from 'firebase/auth';
import { auth } from '../firebase/config';
import { colors } from '../colors'; // Your colors definitions

export default function PasswordResetForm() {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oobCode = params.get('oobCode');
    if (!oobCode) {
      setError('Error retrieving the password reset code.');
      navigate('/login'); // Redirect to login if oobCode is missing
    }
  }, [navigate]);

  // Regex pattern for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    // Check if the password matches the regex pattern
    if (!passwordRegex.test(newPassword)) {
      setError('Password must contain at least 8 characters, including one uppercase letter, one number, and one special character.');
      return;
    }
    // If oobCode is missing, don't attempt to reset the password
    const oobCode = new URLSearchParams(window.location.search).get('oobCode');
    if (!oobCode) {
      setError('Password reset code is invalid or expired.');
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      alert('Your password has been reset successfully.');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setError(error.message);
    }
  };

  // Inline styles using colors from your colors.js module
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: colors.background, // use the background color from your colors module
  };

  const formStyle = {
    width: '100%',
    maxWidth: '320px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${colors.primary}`, // use the primary color from your colors module
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    background: colors.primary, // use the primary color from your colors module
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const linkStyle = {
    marginTop: '15px',
    color: colors.text, // use the text color from your colors module
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handlePasswordReset} style={formStyle}>
        <h1>Reset Your Password</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handlePasswordChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Reset Password
        </button>
        <Link to="/login" style={linkStyle}>
          Back to Login
        </Link>
      </form>
    </div>
  );
}
