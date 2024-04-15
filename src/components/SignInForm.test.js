import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
  it('renders form elements', () => {
    render(<SignInForm />, { wrapper: MemoryRouter });
    
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument(); 
    expect(screen.getByLabelText('Password')).toBeInTheDocument(); 
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument(); 
  });

  it('allows user to input email and password', () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  it('submits the form with valid credentials', () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    expect(screen.queryByText('Incorrect email or password.')).toBeNull();
  });

  it('displays error message with invalid credentials', async () => {
    render(<SignInForm />, { wrapper: MemoryRouter });

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });

    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Incorrect email or password.');
    expect(errorMessage).toBeInTheDocument();
  });
});