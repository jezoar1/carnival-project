import React, { useState, useEffect } from 'react';
import "../Admin/Adminhome.css";
import Adminnavbar from './Adminnavbar';
import axios from 'axios';
import Footer from '../Footer';

function Adminhome() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [participants, setParticipants] = useState([]);

  // Fetch all event titles
  useEffect(() => {
    axios
      .post('http://localhost:4001/viewtitles')
      .then((response) => {
        setEvents(response.data.data); 
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // Handle event selection and fetch participants
  const handleEventSelect = (e) => {
    const eventId = e.target.value;
    setSelectedEventId(eventId);

    // Fetch participants for the selected event
    axios
      .post(`http://localhost:4001/viewparticipant/${eventId}`)
      .then((response) => {
        setParticipants(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching participants:', error);
      });
  };

  return (
    <div className="admin-home-container">
      {/* Admin Navbar */}
      <Adminnavbar />

      <div className="container">
        <h1 className="fade-in">View Event Participants</h1>

        {/* Dropdown to select event */}
        <label htmlFor="eventSelect">Select an Event:</label>
        <select id="eventSelect" onChange={handleEventSelect} value={selectedEventId}>
          <option value="">-- Select an Event --</option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.name}
            </option>
          ))}
        </select>

        {/* Display Participants */}
        {participants.length > 0 ? (
          <div className="participant-list fade-in">
            <h2>Participants</h2>
            <table className="participants-table">
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant, index) => (
                  <tr key={index}>
                    <td>{participant.name}</td>
                    <td>{participant.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          selectedEventId && <p className="fade-in">No participants registered for this event.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Adminhome;
