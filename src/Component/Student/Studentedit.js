  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import '../Student/Student_edit.css';
  import { useParams } from 'react-router-dom';

  function StudentEdit() {
    const [imagePreview, setImagePreview] = useState(null);
    const [user, setUser] = useState({ Name: '', Email: '', Age: '', image: '' });
    const [loading, setLoading] = useState(false);  // State to handle loading
    const [error, setError] = useState(null);  // State to handle errors
    const { id } = useParams();  // Get the 'id' from the URL
    const studentsid = localStorage.getItem('studentsId');  // Get the 'studentsId' from localStorage

    console.log('Params ID:', id);  // Debugging the 'id'
    console.log('LocalStorage studentsId:', studentsid);  // Debugging 'studentsId'

    // Handle Image Change
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setUser((prevUser) => ({
          ...prevUser,
          image: file,
        }));
        setImagePreview(URL.createObjectURL(file));
      }
    };

    // Fetch profile details on load
    useEffect(() => {
      const fetchProfile = async () => {
        const profileId = studentsid || id;  // Use either the id from URL or localStorage
        if (!profileId) {
          setError("ID is missing or undefined.");
          return;
        }

        try {
          const response = await axios.post(`http://localhost:4001/stprofile/${profileId}`);
          console.log('Profile Response:', response.data);

          if (response.data.status === 200) {
            setUser(response.data.data);
          } else {
            setError('Error fetching profile. Please try again.');
          }
        } catch (err) {
          setError('There was an error fetching the profile.');
          console.error('Error fetching profile:', err);
        }
      };

      fetchProfile();
    }, [id, studentsid]);

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();

      const profileId = studentsid || id;  // Use either the id from URL or localStorage
      if (!profileId) {
        setError("ID is missing or undefined.");
        return;
      }

      const formData = new FormData();
      formData.append('Name', user.Name);
      formData.append('Email', user.Email);
      formData.append('Age', user.Age);
      if (user.image) {
        formData.append('image', user.image);
      }

      setLoading(true);  // Set loading to true before API call

      try {
        const response = await axios.post(`http://localhost:4001/updateStudentProfile/${profileId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Profile updated:', response.data);
        alert('Profile updated successfully!');
        setLoading(false);  // Set loading to false after success
      } catch (error) {
        setError('Error updating profile.');
        setLoading(false);  // Set loading to false after failure
        console.error('Error updating profile:', error.response ? error.response.data : error.message);
      }
    };

    return (
      <div className="edit">
        <div className="edit-student-page">
          {error && <p className="error-message">{error}</p>}  {/* Display error messages */}
          {/* Image Section */}
          <div className="eimage-section">
            <div
              className="eimage-preview"
              style={{
                backgroundImage: imagePreview
                  ? `url(${imagePreview})`  // If there's an image preview, show it
                  : user.image  // Else show the image from server
                  ? `url(http://localhost:4001/${user.image?.filename})`
                  : 'url(https://via.placeholder.com/150)',  // Default placeholder if no image
              }}
            ></div>
            <div className="eimage-upload">
              <label className="eupload-btn">
                Upload Profile Image
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
          </div>

          {/* Form Section */}
          <div className="eform-section">
            <h2>Edit Student Profile</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="Name"
                  value={user.Name}
                  onChange={(e) => setUser({ ...user, Name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  value={user.Email}
                  onChange={(e) => setUser({ ...user, Email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  name="Age"
                  value={user.Age}
                  onChange={(e) => setUser({ ...user, Age: e.target.value })}
                  required
                />
              </div>

              <button type="submit" disabled={loading}>  {/* Disable button while loading */}
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default StudentEdit;
