// NavBar.js
import React from 'react';
import '../assests/css/NavBar.css'; // Import your CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li className="nav-item">
          <a href="/" className="nav-link">Login</a>
        </li>
        <li className="nav-item">
          <a href="register" className="nav-link">Sign Up</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">LogOut</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
