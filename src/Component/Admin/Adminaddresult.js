import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Admin/Adminaddresult.css";

function Adminaddresult() {
  const [events, setEvents] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [selectedEventName, setSelectedEventName] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [resultInputs, setResultInputs] = useState({}); // ✅ Define here

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

  const handleEventSelect = (e) => {
    const eventId = e.target.value;
    const eventName = e.target.options[e.target.selectedIndex].text;
    setSelectedEventId(eventId);
    setSelectedEventName(eventName);

    axios
      .post(`http://localhost:4001/viewparticipant/${eventId}`)
      .then((response) => {
        setParticipants(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching participants:', error);
      });
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value.toLowerCase());
  };

  // ✅ Handle input change for results
  const handleResultChange = (participantId, value) => {
    setResultInputs(prev => ({ ...prev, [participantId]: value }));
  };

  // ✅ Submit result
  const handleAddResult = (participantId) => {
    const result = resultInputs[participantId];

    if (!result) {
      alert("Please enter a result.");
      return;
    }

    axios
      .post('http://localhost:4001/result', {
        participantId,
        eventId: selectedEventId,
        result,
      })
      .then(() => {
        alert('Result added successfully!');
      })
      .catch((error) => {
        console.error('Error adding result:', error);
        alert('Error adding result.');
      });
  };

  const filteredParticipants = participants.filter((participant) =>
    participant.name && participant.name.toLowerCase().includes(searchKeyword)
  );

  return (
    <div className="containerss">
      <h1 className="fade-in">Add Results</h1>

      <label htmlFor="eventSelect">Select an Event:</label>
      <select id="eventSelect" onChange={handleEventSelect} value={selectedEventId}>
        <option value="">-- Select an Event --</option>
        {events.map((event) => (
          <option key={event._id} value={event._id}>
            {event.name}
          </option>
        ))}
      </select>

      {selectedEventName && <h2>Participants for Event: {selectedEventName}</h2>}

      <div className="search-container">
        <label htmlFor="search">Search Participants:</label>
        <input
          type="text"
          id="search"
          placeholder="Enter participant name..."
          value={searchKeyword}
          onChange={handleSearchChange}
        />
      </div>

      <div className="participant-list">
        {filteredParticipants.map((participant) => (
          <div key={participant._id} className="participant-item">
            <p><strong>Name:</strong> {participant.name}</p>
            <p><strong>Email:</strong> {participant.email}</p>

            <div className="result-input-group">
              <input
                type="text"
                placeholder="Enter result"
                value={resultInputs[participant._id] || ''}
                onChange={(e) => handleResultChange(participant._id, e.target.value)}
              />
              <button
                className="result-btn"
                onClick={() => handleAddResult(participant._id)}
              >
                Submit Result
              </button>
            </div>
          </div>
        ))}
        {filteredParticipants.length === 0 && (
          <p className="no-participants">No participants found.</p>
        )}
      </div>
    </div>
  );
}

export default Adminaddresult;
