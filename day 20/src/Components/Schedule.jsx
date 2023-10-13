import axios from 'axios';
import '../assests/css/Schedule.css';


 

import React, { useState } from "react";
import { ContactService } from '../Services/ContactService'




import View from './View';


function Schedule() {
  // Step 2: Set up state variables for form inputs
  const [meetingData, setMeetingData] = useState({
    title: "",
    startTime: "",
    endTime: "",
    organizer: "",
    location: ""
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Step 3: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(meetingData);
    // Send a POST request to your backend API to store the meeting data
    ContactService.createMeeting(meetingData).then((res) => {
        setSuccessMessage('Meeting created -successfully');

        console.log(res);
        setErrorMessage('');
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error deleting meeting: ' + error.response.data.message);
      });
  };


  return (
    <div >
      <h1>SCHEDULE MEETING</h1>
    <div className='meeting'>

      <h2>Enter Meeting Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={meetingData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Start Time:</label>
          <input
            type="datetime-local"
            name="startTime"
            value={meetingData.startTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>End Time:</label>
          <input
            type="datetime-local"
            name="endTime"
            value={meetingData.endTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Organizer:</label>
          <input
            type="text"
            name="organizer"
            value={meetingData.organizer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={meetingData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Step 5: Pass the submitted meetingData to the MeetingDetails component */}
      {/* <MeetingDetails meeting={meetingData} /> */}
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
    </div>
  );
}

export default Schedule;
