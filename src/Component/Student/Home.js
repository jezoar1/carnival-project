import React,{ useEffect, useState } from 'react'
import '../Student/Home.css'; // Import the CSS for styles and animations
// import carnivalImage from "./assets/carnival.jpg"; // Replace with your carnival image path
import image from '../Student/image/home.jpg'
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// const blogs = [
//   {
//     id: 1,
//     title: "The Ultimate Carnival Experience",
//     excerpt:
//       "Discover the joy, laughter, and vibrant festivities of our upcoming carnival!",
//     link: "/blog/carnival-experience",
//   },
//   {
//     id: 2,
//     title: "5 Tips for Enjoying the Event",
//     excerpt: "Make the most out of your carnival visit with these expert tips!",
//     link: "/blog/event-tips",
//   },
//   {
//     id: 3,
//     title: "A Look Back at Last Year's Carnival",
//     excerpt:
//       "Relive the memories and highlights of the carnival from last year.",
//     link: "/blog/last-year-carnival",
//   },
// ];
 

function Home ()  {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/slogin'); // Navigate to the login page
  };
  //  const [blogs, setUser] = useState({});
  //     const { id } = useParams();
  //     const studentsid = localStorage.getItem("studentsId");  // Ensure consistent naming
     
  
  //     useEffect(() => {
  //       const fetchProfile = async () => {
  //           try {
  //               const response = await axios.post(`http://localhost:4001/viewblog/${studentsid || id}`);
  //               console.log('Profile Response:', response.data);
    
  //               if (response.data.status === 200) {
  //                   setUser(response.data.data);
  //               } else {
  //                   console.error("Error fetching profile:", response.data.msg);
  //                   setUser({});
  //               }
  //           } catch (err) {
  //               console.log('There was an error fetching the profile:', err);
  //               setUser({});
  //           }
  //       };
    
  //       fetchProfile();
  //   }, [id, studentsid]);
    
      
  // const [blogs,setBlog]=useState([]);
  // useEffect(()=>{
  

  //   axios.post('http://localhost:4033/viewblogs')
  //   .then((result)=>{
  //     console.log(result)
  //     setBlog(result.data.data)
  //     console.log(result.data.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })

  // }, []);
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4001/viewblogs') // If POST is required
      .then((result) => {
        console.log('Fetched blogs:', result.data.data);
        setBlog(result.data.data);
      })
      .catch((error) => {
        console.log('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="homepage">
    {/* <div className="home-page"> */}
      {/* Header Section */}
      <header className="hero-section">
        <h1 className="hero-title">Welcome to the Carnival</h1>
        <p className="hero-subtitle">Experience the Joy and Magic</p>
        <button onClick={goToLogin} className="hero-button">LOGIN</button>
      </header>

      {/* Carnival Image Section */}
      <section className="carnival-section">
        <h2 className="section-title">Carnival Highlights</h2>
        <div className="image-container">
          <img src={image} alt="Carnival" className="carnival-image" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2 className="section-title">Latest Blogs</h2>
      <div className="blog-list">
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          blogs.map(blog => (
            <div key={blog._id} className="blog-card">
              <img
                src={`http://localhost:4001/${blog.image}`}
                alt={blog.title}
                className="blog-image"
              />
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">
                {blog.content.length > 100
                  ? blog.content.substring(0, 100) + '...'
                  : blog.content}
              </p>
              <a href={blog.link || '#'} className="blog-link">
                Read More →
              </a>
            </div>
          ))
        )}
      </div>
      </section>
        <Footer/>
    </div>
    // </div>
  );
};

export default Home;
