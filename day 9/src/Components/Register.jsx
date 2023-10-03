import React, { useState } from "react";
import '../assests/css/LogReg.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "name") {
      setName(value);
      // Clear the name error message when typing
      newErrors.name = "";
    } else if (name === "email") {
      setEmail(value);
      // Clear the email error message when typing
      newErrors.email = "";
    } else if (name === "password") {
      setPass(value);
      // Clear the password error message when typing
      newErrors.password = "";
    }

    setErrors(newErrors);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", password: "" };

    // Check if name is empty
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Check if email is empty
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    // Check if password is empty
    if (!pass.trim()) {
      newErrors.password = "Password is required";
    }

    // If there are errors, set them
    if (newErrors.name || newErrors.email || newErrors.password) {
      setErrors(newErrors);
    } else {
      // No errors, perform registration action (e.g., send to server)
      console.log("Form is valid. Perform registration action with email:", email);

      // Redirect to the home page
      navigate('/main ');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name:</label>
        <input
          value={name}
          type="text"
          placeholder="Enter your full name"
          id="name"
          name="name"
          onChange={handleInputChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          value={email}
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

        <button type="submit">Register</button>
      </form>

      {/* Redirect to the login page */}
      <button
        className="link-btn"
        onClick={() => navigate('/login')}
      >
        Already have an account! Login here.
      </button>
    </div>
  );
};
