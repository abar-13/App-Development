import React, { useState } from 'react';

function View() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement logic here to schedule the meeting
    alert(`Meeting not viewed for ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div>
      <h1>Online Meeting Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Select a Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Select a Time:</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div>
          <button type="submit">View Meeting</button>
        </div>
      </form>
    </div>
  );
}

export default View;
