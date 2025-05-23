import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Admin/Adminaddevent.css";

function Adminaddevent() {
  const [data, setData] = useState({
    title:'',
    name: '',
    date: '',
    time: '',
    venue: ''
  });
  
  const func = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  // const fun = (e) => {
  //   const { name, value } = e.target;
  //   setsong({
  //     ...song,
  //     [name]: value
  //   });
  // };
  // const fu = (e) => {
  //   const { name, value } = e.target;
  //   setgame({
  //     ...game,
  //     [name]: value
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:4001/dances', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(result.data);
      alert('Event added successfully');
    } catch (error) {
      console.error('Error adding event:', error.response.data);
    }
  };
  // const songsubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await axios.post('http://localhost:4001/songs', song, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     console.log(result.data);
  //     alert(' Event added successfully');
  //   } catch (error) {
  //     console.error('Error adding event:', error.response.data);
  //   }
  // };
  // const gamesubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await axios.post('http://localhost:4001/games', game, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     console.log(result.data);
  //     alert(' Event added successfully');
  //   } catch (error) {
  //     console.error('Error adding event:', error.response.data);
  //   }
  // };
  return (
    <div className="dance-page">
      <h1>Manage Events</h1>

      {/* Dance Section */}
      <div className="dances-sections">
        <h2>Add Dance Event</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="title"
            value={data.title}
            onChange={func}
            placeholder="Category"
            required
          />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={func}
            placeholder="Dance Event Name"
            required
          />
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={func}
            // onChange={(e) => handleInputChange(e, 'dance')}
            required
          />
          <input
            type="time"
            name="time"
            value={data.time}
            onChange={func}
            // onChange={(e) => handleInputChange(e, 'dance')}
            required
          />
          <input
            type="text"
            name="venue"
            value={data.venue}
            onChange={func}
            // onChange={(e) => handleInputChange(e, 'dance')}
            placeholder="Dance Event Venue"
            required
          />
          <button type="submit">Add Dance Event</button>
        </form>

       </div>
       </div>
  );
}

export default Adminaddevent
