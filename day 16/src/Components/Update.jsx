import React, { useState } from 'react';
import axios from 'axios';

import { ContactService } from '../Services/ContactService';

function Update() {

  const [meetingId, setMeetingId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [meetingData, setMeetingData] = useState({
    meetingId: '',
    title: '',
    startTime: '',
    endTime: '',
    organizer: '',
    location: '',
  });

  const handleIdChange = (e) => {
    setMeetingId(e.target.value);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  const handleUpdate = () => {
    // Make a PUT request to update the meeting by ID
    ContactService.updateMeeting(meetingData.meetingId, meetingData) // Replace with your actual API endpoint
      .then((res) => {
        setSuccessMessage('Meeting updated successfully');
        console.log(res);
        setErrorMessage('');
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error updating meeting: ' + error.response.data.message);
      });
  };
  return (
    <div className='Meeting'>
      <h2>Update Meeting</h2>
      <div className='Meeting'>
        <label>Meeting ID:</label>
        <input
          type="text"
          name="meetingId"
          value={meetingData.meetingId}
          onChange={handleInputChange}
        />
      </div>
      <div className='Meeting'>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={meetingData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className='Meeting'>
        <label>Start Time:</label>
        <input
          type="datetime-local"
          name="startTime"
          value={meetingData.startTime}
          onChange={handleInputChange}
        />
      </div>
      <div className='Meeting'>
        <label>End Time:</label>
        <input
          type="datetime-local"
          name="endTime"
          value={meetingData.endTime}
          onChange={handleInputChange}
        />
      </div>
      <div className='Meeting'>
        <label>Organizer:</label>
        <input
          type="text"
          name="organizer"
          value={meetingData.organizer}
          onChange={handleInputChange}
        />
      </div>
      <div className='Meeting'>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={meetingData.location}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      </ div>
      );
    }
    
    
export default Update;