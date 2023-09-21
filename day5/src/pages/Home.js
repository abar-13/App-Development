import React from 'react';
import './Home.css';
import './meet.jpg'

function Home() {
  return (
    <div className='img'>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="navbar-divider"></span>
          <span>Meet App</span>
        </div>
        
        <div className="navbar-links">
          <a href="/">Login</a>
          <span className="navbar-divider">|</span>
          <a href="/schedule">Schedule</a>
          <span className="navbar-divider">|</span>
          <a href="/join">Join Meeting</a>
          <span className="navbar-divider">|</span>
          <a href="/profile">My Profile</a>
          <span className="navbar-divider">|</span>
          <a href="/logout">Logout</a>
          <span className="navbar-divider"></span>
        </div>
      </nav>

      <div className="dashboard-container">
        <div className="dashboard-option">
          <h2>Create a Meeting</h2>
          <a href="/create-meeting">Start</a>
        </div>

        <div className="dashboard-option">
          <h2>Join a Meeting</h2>
          <a href="/join-meeting">Join</a>
        </div>

        <div className="dashboard-option">
          <h2>Scheduled Meetings</h2>
          <a href="/scheduled-meetings">View</a>
        </div>

        <div className="dashboard-option">
          <h2>User Profile</h2>
          <a href="/user-profile">Edit Profile</a>
        </div>
      </div>

    </div>
  );
}

export default Home;
