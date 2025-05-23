import React,{ useState }   from 'react'
import axios from 'axios'
import image from '../Student/image/login.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Studentnavbar from './Studentnavbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import '../Student/Studentlogin.css'



function Studentlogin () {
  const navigate=useNavigate()
  const [data,setdata]=useState({Email:'',Password:''})

  const func=(b)=>{
   
   setdata({...data,[b.target.name]: b.target.value})
  }
  console.log(data)

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios.post('http://localhost:4001/login', data)
    
    .then((result) => {
      console.log('API Response:', result); // Log the response

      // Check if login is successful
      if (result?.data?.status === 200) {
        alert("Login successfully");

        // Check if _id is available
        if (result?.data?.data?._id) {
          localStorage.setItem("studentsId", result.data.data._id);
          navigate('/shome');  // Redirect to the home page
          console.log("Student ID:", result.data.data._id);
        } else {
          // _id is missing, handle this case
          console.error("Student ID is not available in the response");
          toast.error("Login failed. No student ID found.");
        }
      }
      // Handle other status codes
      else if (result?.data?.status === 500) {
        toast.error("Password error");
      } else if (result?.data?.status === 400) {
        toast.error("User not found");
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
      toast.error("Login failed. Please check your email/password.");
    });
};



  return (
  <div className='login'>
 <div className="login-container">
 {/* Left Image Section */}
 <div className="left-image-section">
   <img
     src={image} // Replace with your image URL
     alt="Celebration"
     className="celebration-image"
   />
 </div>

 {/* Right Form Section */}
 <div className="right-form-section">
   {/* Logo and Title */}
   <div className="logo-title-section">
     <img
       src={image} // Replace with your logo URL
       alt="Logo"
       className="logo"
     />
     <h1>Student</h1>
   </div>

   {/* Form Heading */}
   <h2>Sign into your account</h2>

   {/* Login Form */}
   <form  onSubmit={onsubmit}>
     <div className="input-field">
       <input type="text" placeholder="user name"  onChange={func}
                        className="form-control form-control-lg"
                        value={data.Email} name='Email'required />
     </div>
     <div className="input-field">
       <input type="password" placeholder="Password"
       onChange={func}
       className="form-control form-control-lg"
       value={data.Password} name="Password" required />
     </div>
     <button  type="submit" className="login-btn">
       LOGIN
     </button>
   </form>

   {/* Forgot Password and Register Links */}
   <div className="login-options">
     <a href="#!" className="forgot-password">Forgot password?</a>
     <p>
       Don't have an account?{' '}
       <a href="./ssign" className="register-link">Register here</a>
     </p>
   </div>

   {/* Footer Links */}
   <div className="footer-links">
     <a href="#!" className="small-text">Terms of use</a>
     <a href="#!" className="small-text">Privacy policy</a>
   </div>
 </div>
</div>
</div>
  ) 
}

export default Studentlogin