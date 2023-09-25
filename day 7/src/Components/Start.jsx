import React, { useState } from 'react';

function Start() {
  const [meetingName, setMeetingName] = useState('');

  const handleMeetingNameChange = (event) => {
    setMeetingName(event.target.value);
  };

  const startMeeting = () => {
    
    alert(`Started meeting: ${meetingName}`);
  };

  return (
    <div>
      
      <form>
        <div>
          <label htmlFor="meetingName">Meeting Code:</label>
          <input
            type="text"
            id="meetingName"
            value={meetingName}
            onChange={handleMeetingNameChange}
            placeholder="Enter meeting code"
          />
        </div>
        <div>
          <button type="button" onClick={startMeeting}>
            Start Meeting
          </button>
        </div>
      </form>
    </div>
  );
}

export default Start;
