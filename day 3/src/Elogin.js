import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Elogin.css';

function Elogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Clear any previous validation errors when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Check if email is empty or invalid (you can add more specific validation)
    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    }

    // Check if password is empty or too short (you can add more specific validation)
    if (!formData.password || formData.password.length < 6) {
      isValid = false;
      newErrors.password = 'Password is required and should be at least 6 characters';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNavigate = () => {
    navigate("/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // The form is valid, you can proceed with form submission logic here
      console.log('Form data:', formData);
      handleNavigate(); // Navigate to the "/home" route
    } else {
      // The form is not valid, do not submit and display validation errors
      console.log('Form validation failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Employee</h3>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email.."
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="error">{errors.password}</div>

        <div className="login-button-container">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="signup-paragraph">
        <p>
          New to us? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Elogin;