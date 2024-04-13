import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/config';
import styles from './ForgotPassword.module.css';
import logo from "../images/AudiologyLogo.png";
import { colors } from "../colors";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Check your email for a link to reset your password.");
            navigate('/login'); // Redirect to login after email is sent
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.forgotPasswordContainer}>
            <form className={styles.forgotPasswordForm} onSubmit={handleSubmit}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <h2 className={styles.heading}>Forgot Password</h2>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.inputField}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Send Email</button>
                <p className={styles.text}>
                    Remember your password? <Link to="/login" className={styles.link}>Log in</Link>
                </p>
            </form>
        </div>
    );
}

export default ForgotPassword;
