import React, { useState } from "react";
import '../assests/css/LogReg.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail as setReduxEmail } from '../authActions';

export const Login = (props) => {
  const [localEmail, setLocalEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const isEmailValid = (email) => {
    // Regular expression pattern for a valid email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const navigate = useNavigate(); // Initialize the navigate function
  const dispatch = useDispatch(); // Initialize dispatch

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setLocalEmail(value);
      // Clear the email error message when typing
      setErrors({ ...errors, email: "" });
    } else if (name === "password") {
      setPass(value);
      // Clear the password error message when typing
      setErrors({ ...errors, password: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email or password is empty and set the error message if needed
    const newErrors = { email: "", password: "" };

    if (!localEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!isEmailValid(localEmail)) {
      newErrors.email = "Invalid email format";
    }

    if (!pass.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // If there are errors, prevent form submission
    if (newErrors.email || newErrors.password) {
      return;
    }

    // No errors, perform login action (e.g., send to server)
    console.log("Form is submitted. Perform login action with email:", localEmail);

    // Set the email in the Redux store
    dispatch(setReduxEmail(localEmail));

    // Redirect to the home page
    navigate('/main');
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={localEmail}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          value={pass}
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit">Log In</button>
      </form>

      <Link to='/register' className="link-btn">Don't have an account? Register here.</Link>
    </div>
  );
};
