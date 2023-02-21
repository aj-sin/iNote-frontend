
import { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";
import "../css/login.css"
import "../css/signup.css"
import graphic from "../assests/img.png"
import {
  Link
} from "react-router-dom";


function Signup(props) {

  // const host = "http://localhost:5000"
    const host = "https://inoteapi.onrender.com"


  const [credentials, setCredentials] = useState({ Name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate()
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  const handleonsubmit = async (e) => {
    e.preventDefault()
    // console.log("User signed in")
    if (credentials.password === credentials.cpassword) {
      const { Name, email, password } = credentials
      //API CALL
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': "application/json"
        },

        body: JSON.stringify({ Name, email, password })
      });
      const json = await response.json()
      // console.log(json)

      if (json.success) {
        localStorage.setItem("token", json.authtoken)
        navigate('/note')
        props.showalert("Login Successful", "success")

      } else {
        props.showalert("User with this email address Already Exists.....", "danger")
      }
    } else {
      props.showalert("Password Do not match", "danger")
    }

  }
  return (
    <>

      <div className="login">
        <div className="main">


          <div className="welcome">
            <h1>Sign Up</h1>
          </div>
          <div className="credentials">
            <form onSubmit={handleonsubmit}>

              <div className='Name'>
                <label htmlFor="Name"></label>
                <input className='logininput' type="text" placeholder="Name" name='Name' onChange={onChange} value={credentials.Name} />
              </div>
              <div >
                <label htmlFor="email"></label>
                <input className='logininput' type="email" placeholder="Enter email" name='email' onChange={onChange} value={credentials.email} />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input className='logininput' type="password" placeholder="Password" name='password' onChange={onChange} value={credentials.password} minLength={8} required />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input className='logininput' type="password" placeholder="Confirm Password" name='cpassword' onChange={onChange} value={credentials.cpassword} minLength={8} required />
              </div>
              <div className="btn-signup btn">

                <button className='gradient lg-btn' type="submit">Signup</button>
                <Link to="/login"><button className='login-btn-signup'><span>Login</span></button></Link>
              </div>
            </form>
          </div>
        </div>
        <div className="graphic">
          <img className='img' src={graphic} alt="graphic" srcSet="" />
        </div>
      </div>
    </>
  );
}

export default Signup;

