import React,{ useEffect, useState }   from 'react'
import image from '../Admin/Image/login.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';

function Adminlogin() {
  const navigate=useNavigate()
    const[ data,setdata]=useState({Username:"",Password:""})
    const example=(a)=>{
      console.log(a)
    setdata({...data,[a.target.name]: a.target.value})
    }
    const onsubmit=(Event)=>{
      Event.preventDefault()
      if(data.Username=="admin"&&data.Password=="admin123"){
    console.log("sucess");
    alert("loged In")
    navigate('/Ahome')
       }
	   else {
	   if(data.Username!=="admin"){
		console.log("User Not Found")
		alert("User Not Found")
	   }
	  
     if(data.Password!=="admin123") {
		
        console.log("Password Error");
        alert("Password Incorect")
    }
	console.log("Login Falied")
		alert("Login Falied")
}
       console.log("save")
    }
    console.log(data)
  return (
    <section className="vh-100"style={{ background: 'linear-gradient(to right,rgba(93,2,105,255),rgba(55,0,90,255))' }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: '1rem' }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                
                  <img src={image}
                  alt='login form'
									className="img-fluid"
                  style={{ borderRadius: '1rem 0 0 1rem' }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={onsubmit}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                      <span className="h1 fw-bold mb-0">Jezoar</span>
                    </div>
                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                      Sign into your account
                    </h5>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <MDBInput
                        label="user name"
                        id="form2Example17"
                        type="text"
                        onChange={ example}
                        name="Username"
                        value={data.Username}
                        className="form-control form-control-lg"
                           
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <MDBInput
                        label="Password"
                        id="form2Example27"
                        type="password"
                        onChange={ example}
                        name="Password"
                        value={data.Password}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="pt-1 mb-4">
                      <MDBBtn
                        className="btn btn-dark btn-lg btn-block"
                        type="submit"
                        data-mdb-ripple-init
                      >
                        Login
                      </MDBBtn>
                    </div>
                    {/* <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                      Don't have an account?{' '}
                      <a href="#!" style={{ color: '#393f81' }}>
                        Register here
                      </a>
                    </p>
                    <a href="#!" className="small text-muted">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Adminlogin