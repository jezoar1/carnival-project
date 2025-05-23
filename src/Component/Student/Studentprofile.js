import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Student/Studentprofile.css'
// import image from '../Student/image/login.jpg'
import { useParams } from 'react-router-dom';





function Studentprofile() {
    const handleEdit = () => {
        // You can implement your edit functionality here, such as opening an edit form or modal.
        alert('Edit button clicked! Implement the edit functionality here.');
      };
    
    
        const [user, setUser] = useState({});
      const { id } = useParams();
      const studentsid = localStorage.getItem("studentsId");  // Ensure consistent naming
     
  
      useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.post(`http://localhost:4001/stprofile/${studentsid || id}`);
                console.log('Profile Response:', response.data);
    
                if (response.data.status === 200) {
                    setUser(response.data.data);
                } else {
                    console.error("Error fetching profile:", response.data.msg);
                    setUser({});
                }
            } catch (err) {
                console.log('There was an error fetching the profile:', err);
                setUser({});
            }
        };
    
        fetchProfile();
    }, [id, studentsid]);
    
      
    
        return(
            <div className='sbody'>
       <div className="studentss-profile">
  <div className="profiless-header">
    {user.image ?.filename?  (
      <img 
        src={`http://localhost:4001/upload/${user.image?.filename}`}  // Assuming the image is stored in the 'uploads' directory
        alt="Student" 
        className="profiless-pic" 
      />
    ) : (
      <img 
        src="path/to/default-profile.jpg"  // Path to a default profile picture
        alt="Default Profile" 
        className="profiless-pic" 
      />
    )}
  
{/* <img  
              // src={`http://localhost:4001/${user.image?.filename}`} className="profile-pic"    /> */}
          
          </div>
          <div className="profiless-body">
            <h2 className="profiless-name">{user.Name}</h2>
            <h4 className="profiless-major">{user.Email}</h4>
            <p className="profiless-description">
              Enthusiastic student passionate about software engineering, artificial intelligence, and open-source contributions. I enjoy working on projects that solve real-world problems and aim to make a difference in the tech world.
            </p>
    
            {/* <div className="profile-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>Dean's List for 3 consecutive semesters</li>
                <li>1st Place - University Hackathon 2023</li>
                <li>Published Research Paper on AI Ethics</li>
              </ul>
            </div>
          </div> */}</div>
    
          <div className="profiless-footer">
            
            <a href="https://linkedin.com" className="social-link linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:jane.doe@example.com" className="social-link email">
              <i className="fas fa-envelope"></i>
            </a>
            <button className="edit-button" onClick={handleEdit}>
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        </div>
    );
    };

export default Studentprofile