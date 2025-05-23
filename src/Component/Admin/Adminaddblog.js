import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../Admin/Adminblog.css"

function Adminaddblog() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
   
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));  // Create a preview URL for the uploaded image
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for file upload
    const blogData = new FormData();
    blogData.append('title', formData.title);
    blogData.append('content', formData.content);
    
    if (image) {
      blogData.append('image', image);  // Append image if it's uploaded
    }

    try {
      const response = await axios.post('http://localhost:4001/blogs', blogData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccessMessage('Blog post created successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error creating blog post.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-form-container">
        <h1>Create a Blog Post</h1>
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Upload Image:</label>
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
            {imagePreview && <img src={imagePreview} alt="Image Preview" className="image-preview" />}
          </div>
          <button type="submit" className="submit-button">Create Blog Post</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Adminaddblog