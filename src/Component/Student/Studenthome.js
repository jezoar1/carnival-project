import React from 'react'
import '../Student/Studenthome.css'
import image from '../Student/image/home.jpg'
// import Studentnavbar from './Studentnavbar';

import Studentnavbar from './Studentnavbar';
import Footer from '../Footer';
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'

function Studenthome() {
    const events = [
		{
		  time: '9 AM - 1:30 AM',
		  title: 'Dances',
		  bgColor: '#E5635E',
		},
  ]
    const event=[
		{
		  time: '2:30 AM - 3:00 AM',
		  title: 'Song',
		  bgColor: '#7AB77A',
		},
  ]
  const even=[
		{
		  time: '4:00 AM - 6:30 AM',
		  title: 'Games',
		  bgColor: '#E5C16A',
		},
	  ];
  return (
    <div>
      <Studentnavbar/>
    <header className="hero-section" id="home">
        <div className="hero-content">
          {/* <h1>Welcome to MyWebsite</h1> */}
          {/* <p>Your journey starts here.</p> */}
          {/* <a href="#about" className="btn btn-primary">Learn More</a> */}
          <img src={image}
                  alt='login form'
									className="img-fluid"
                  style={{ borderRadius: '1rem 0 0 1rem' }}
                />
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="features">
          <div className="feature">
          
            <i className="fas fa-cogs"></i>
            
          </div>
          <div className="feature">
            <i className="fas fa-laptop"></i>
            
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            
          </div>
        </div>
      </section>
        
    
      <section className="event-section">
      <div className="event-container">
        <h2 className="event-title">Event Schedule:</h2>
        <img className="mask-image" src="path_to_mask_image.png" alt="Event Mask" />
        <div className="event-list">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="time-box" style={{ backgroundColor: event.bgColor }}>
                {event.time}
              </div>
              <div className="details-box">
                <h3 className="event-title-card">{event.title}</h3>
                <a className="register-link" href="/sregistration">Register Now</a>
              </div>
            </div>
          ))}

          
        </div>
        
      </div>
      <div className="event-container">
        {/* <h2 className="event-title">Event Schedule:</h2> */}
        {/* <img className="mask-image" src="path_to_mask_image.png" alt="Event Mask" /> */}
        <div className="event-list">
          {event.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="time-box" style={{ backgroundColor: event.bgColor }}>
                {event.time}
              </div>
              <div className="details-box">
                <h3 className="event-title-card">{event.title}</h3>
                <a className="register-link" href="#register">Register Now</a>
              </div>
            </div>
            
            
          ))}

          
        </div>
        
      </div>
      <div className="event-container">
        {/* <h2 className="event-title">Event Schedule:</h2> */}
        {/* <img className="mask-image" src="path_to_mask_image.png" alt="Event Mask" /> */}
        <div className="event-list">
          {even.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="time-box" style={{ backgroundColor: event.bgColor }}>
                {event.time}
              </div>
              <div className="details-box">
                <h3 className="event-title-card">{event.title}</h3>
                <a className="register-link" href="#register">Register Now</a>
              </div>
            </div>
            
            
          ))}

          
        </div>
        
      </div>
      <Footer/>
    </section>
    {/* <Footer/> */}
   
      </div>
  );
};

export default Studenthome