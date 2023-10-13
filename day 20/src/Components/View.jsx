import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContactService } from '../Services/ContactService';

function View() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const fetchMeeting = async () => {
    let response = await ContactService.getAllMeetings();
    console.log(response);
    if (response.data.length !== 0) {
      setMeetings(response.data);
      setLoading(false);
    }
    else {
      console.log("Unable to fetch");
    }
  }
  useEffect(() => {
    fetchMeeting()
  }, []);



  return (
    <div className='meeting'>
    
      <h2>Meeting List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {meetings && meetings.map((meeting) => (
            <li key={meeting.id}>{meeting.title} </li>
            // <li key={meeting.id}>{meeting.title}  {meeting.startTime} {meeting.EndTime} {meeting.organizer} {meeting.location}</li>
          ))}
        </ul>
      )}
      
    </div>
    
  );
}

export default View;