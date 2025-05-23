import React,{useState,useEffect} from 'react'
import axios from 'axios';
import'../Student/Gameregistration.css'


function Gameregistration() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedEventId, setSelectedEventId] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
  
    // Fetch events when the component mounts
    useEffect(() => {
      axios
        .post('http://localhost:4001/viewtitles')
        .then((response) => {
          console.log(response);
          
          setEvents(response.data.data); // Assuming response.data is an array of events
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
        });
    }, []);
  
    // Handle dropdown change
    const handleEventSelect = (e) => {
      const eventId = e.target.value;
      setSelectedEventId(eventId);
  
      // Fetch the selected event details
      axios
        .post(`http://localhost:4001/viewalldetails/${eventId}`)
        .then((response) => {
          setSelectedEvent(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching event details:', error);
        });
    };
  
    // Handle form input changes
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData,selectedEventId);
      
      axios
        .post('http://localhost:4001/register', { ...formData, eventId: selectedEventId })
        .then((response) => {
          alert('Registration successful!');
          setFormData({ name: '', email: '' }); // Clear the form
        })
        .catch((error) => {
          console.error('Error registering:', error);
          alert('Error registering for the event');
        });
    };
  
  return (
    <div className="containerss">
    <h1 className="fade-in">Register for an Event</h1>

    {/* Dropdown for selecting event */}
    <label htmlFor="eventSelect">Select an Event:</label>
    <select id="eventSelect"
     onChange={handleEventSelect} value={selectedEventId}
     >
      <option value="">-- Select an Event --</option>
      {events?.map((event) => (
        <option key={event._id} value={event._id}>
          {event.name}
        </option>
      ))}
    </select>

    {/* Show event details with animation */}
    {selectedEvent && (
      <div className="event-details fade-in">
        <h2>{selectedEvent.name}</h2>
        <p>Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
        <p>Time: {selectedEvent.time}</p>
        <p>Venue: {selectedEvent.venue}</p>

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="register-btn">Register Now</button>
        </form>
      </div>
    )}
  </div>
  )
}

export default Gameregistration