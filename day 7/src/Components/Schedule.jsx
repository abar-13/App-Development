import React from 'react';
import '../assests/css/Schedule.css'

function Schedule() {
  return (
    <div className="container">
      <header className="header">
        <h1>Meeting Scheduler</h1>
      </header>
      <main className="main-content">
        <section className="schedule-meeting">
          <h2>Schedule a Meeting</h2>
          <form className="meeting-form">
            <div className="form-group">
              <label htmlFor="meetingTitle">Meeting Title:</label>
              <input type="text" id="meetingTitle" />
            </div>
            <div className="form-group">
              <label htmlFor="meetingDate">Date:</label>
              <input type="date" id="meetingDate" />
            </div>
            
            <div className="form-group">
              <label htmlFor="meetingTime">Time:</label>
              <input type="time" id="meetingTime" />
            </div>
            <div className="form-group">
              <label htmlFor="participants">Participants:</label>
              <input type="text" id="participants" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" rows="4"></textarea>
            </div>
            <button type="submit">Schedule Meeting</button>
          </form>
        </section>

      </main>
    </div>
  );
}

export default Schedule;