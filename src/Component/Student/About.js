import React from 'react'
import '../Student/About.css';
import image from '../Student/image/home.jpg'



function About() {
  return (
//      <div className="about-container">
//       <div className="about-hero">
//         <h1>About Our Carnival</h1>
//         <p>Celebrating culture, creativity, and community.</p>
//       </div>

//       <div className="about-content">
//         <div className="about-text">
//           <h2>Who We Are</h2>
//           <p>
//             Our carnival is a vibrant gathering of students, artists, and enthusiasts
//             showcasing talent through various events including dance, music, drama,
//             and more. We believe in unity through diversity.
//           </p>

//           <h2>Our Mission</h2>
//           <p>
//             To create unforgettable experiences that foster creativity, inclusivity,
//             and student engagement through dynamic events and competitions.
//           </p>
//         </div>

//         <div className="about-image">
//           <img
//             src={image}
//             alt="Carnival"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
<div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Our Carnival</h1>
          <p>
            Welcome to our vibrant carnival celebration! Our event is a fusion of color, culture, and joy,
            bringing together communities for a memorable experience. Whether you love dancing, food,
            games, or music, there's something for everyone at our carnival.
          </p>
          <p>
            Our mission is to spread happiness and create lasting memories. Each year, we grow bigger and better,
            thanks to your continued support. We can’t wait to celebrate with you!
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="Carnival Celebration" />
        </div>
      </div>
    </div>
  );
}

export default About