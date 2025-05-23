import React,{ useEffect, useState } from 'react'
import '../Student/Studentsignup.css'
import axios from 'axios'

function Studentsignup() {
  const [data,setdata]=useState({Name:'',Email:'',Password:'',Age:'',image:''})

  const func=(b)=>{
    
   
    const { name, value,files } = b.target;
    if(b.target.name === "image"){
      // handleImageUpload(e);
      setdata({...data,image:b.target.files[0]});
  }else {
      setdata({...data,[b.target.name]:b.target.value})
  }}
  console.log(data)
const onsubmit=(e)=>{
  e.preventDefault();
  console.log(e);
  axios.post('http://localhost:4001/student',data,{
    headers:{
      "content-Type":"multipart/form-data",
    }})
   .then((result)=>{
     console.log(result)
    
     alert("Registration sucessfully")
    
   })
   .catch((error)=>{
     console.log(error)
   })
  }
  return (
    <div className='ssign'>

    <section>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black reg">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">Sign up</p>

                    <form onSubmit={onsubmit} className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            onChange={func}
                            name="Name"
                            value={data.Name}
                          />
                          <label className="form-label" htmlFor="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={func}
                            name="Email"
                            value={data.Email}
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={func}
                            name="Password"
                            value={data.Password}
                          />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="number"
                            id="form3Example4cd"
                            className="form-control"
                            onChange={func}
                            name="Age"
                            value={data.Age}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">
                            Age
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
  <div className="form-outline flex-fill mb-0">
    <div className="file-input">
      <label htmlFor="image-upload">Upload Image</label>
      <input
        type="file"
        id="image-upload"
        className="form-control"
        onChange={func}
        name="image"
        accept="image/*"
        // value={data.image}
      />
    </div>

    {/* Image Preview */}
    {data.image && (
      <div className="image-preview mt-2">
        <img
          src={URL.createObjectURL(data.image)}
          alt="Selected Image"
          className="img-fluid"
        />
      </div>
    )}
  </div>
</div>
 <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button

                        
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg   "
                          // className="sbutton"
                          
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>


  )
}

export default Studentsignup