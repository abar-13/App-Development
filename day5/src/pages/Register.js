import React, { useState } from 'react';
import './Register.css';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const checkInputs = () => {
    const errorsCopy = { ...errors };

    if (!username.trim()) {
      errorsCopy.username = 'Username cannot be blank';
    } else {
      errorsCopy.username = '';
    }

    if (!email.trim()) {
      errorsCopy.email = 'Email cannot be blank';
    } else if (!isEmail(email)) {
      errorsCopy.email = 'Not a valid email';
    } else {
      errorsCopy.email = '';
    }

    if (!password.trim()) {
      errorsCopy.password = 'Password cannot be blank';
    } else {
      errorsCopy.password = '';
    }

    if (!password2.trim()) {
      errorsCopy.password2 = 'Password2 cannot be blank';
    } else if (password !== password2) {
      errorsCopy.password2 = 'Passwords do not match';
    } else {
      errorsCopy.password2 = '';
    }

    setErrors(errorsCopy);
  };

  const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <form className="form">
        <div className={`form-control ${errors.username ? 'error' : 'success'}`}>
          <label htmlFor="username">Username</label>
         
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <i className="fas fa-exclamation-circle"></i>}
          <small>{errors.username}</small>
          
        </div>
        <div className={`form-control ${errors.email ? 'error' : 'success'}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <i className="fas fa-exclamation-circle"></i>}
          <small>{errors.email}</small>
        </div>
        <div className={`form-control ${errors.password ? 'error' : 'success'}`}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <i className="fas fa-exclamation-circle"></i>}
          <small>{errors.password}</small>
        </div>
        <div className={`form-control ${errors.password2 ? 'error' : 'success'}`}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            placeholder="re-enter"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {errors.password2 && <i className="fas fa-exclamation-circle"></i>}
          <small>{errors.password2}</small>
        </div>
        <button onClick={checkInputs}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
