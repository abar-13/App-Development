import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../store";
import '../assests/css/LogReg.css'
import { EntryService } from "../Services/EntryService";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await EntryService.validateUser(user);

    if (response.token) {
      localStorage.setItem("Token", response.token);
      localStorage.setItem("email", user.email);
      store.dispatch({
        type: "login",
        payload: user
      });
      navigate('/main');
    }
  };

  return (
    <div className="App-1">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="f-1" onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              New user? <Link to="/register">Signup here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
