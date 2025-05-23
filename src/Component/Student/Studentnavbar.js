
import React,{useState} from 'react';
// import './FestivalPage.css'; // Import your CSS file
import '../Student/Studentnavbar.css'

const Studentnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div>
    <nav className="navbar">
    <div className="logo">CARNIVAL</div>

    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
      <a href="./shome" className="nav-item">Home</a>
      <a href="/about" className="nav-item">About</a>

      {/* Dropdown Menu */}
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Services <i className="arrow down"></i>
        </button>
        <div className={`dropdown-content ${dropdown ? 'show' : ''}`}>
          <a href="./sregistration">Event registration</a>
          <a href="./rview">View Result</a>
          <a href="/sprofile">Profile</a>
        </div>
      </div>

      <a href="/contact" className="nav-item">Contact</a>
    </div>

    <div className="hamburger" onClick={toggleMenu}>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
    </div>
  </nav>
      
    </div>
  );
};

export default Studentnavbar;
