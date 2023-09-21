import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import store from '../Redux/Store';

function LoginPage() {
  const navigate = useNavigate();

  // Define state variables to store form input values and error messages
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Define state variable to store the logged-in user's email
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type :  "login",
      payload : formData
    })
    navigate("H ome")
    // Validate email and password
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email is required';
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);

    // If valid, you can perform your login logic here
    if (valid) {
      // Simulate a successful login (replace this with your actual login logic)
      const loggedInEmail = formData.email;

      // Store the logged-in user's email in state
      setLoggedInUser(loggedInEmail);

      // Navigate to the admin page upon successful login
      navigate('/home');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="login-page" className="row">
      <div className="col s12 z-depth-6 card-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email.."
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <div className="login-button-container">
            <button type="submit">Login</button>
          </div>

          <div className="row">
            <div className="input-field col s6 m6 l6">
              <p className="margin medium-small">
                <Link to="/register">Register Now!</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
