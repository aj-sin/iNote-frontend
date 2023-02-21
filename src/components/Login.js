
import { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";
import "../css/login.css"
import graphic from "../assests/img.png"
// import NoteContext from '../context/NoteContext'
import {
  Link
} from "react-router-dom";


function Login(props) {
  // const context = useContext(NoteContext)
  //   const { getuser} = context
  // const host = "http://localhost:5000"
    const host = "https://inoteapi.onrender.com"

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  const handleonsubmit = async (e) => {
    e.preventDefault()
    // getuser()
    // console.log("User logged in")
    //API CALL
    const response = await fetch(`${host}/api/auth/loginuser`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': "application/json"
      },

      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    // console.log(json)

    if (json.success) {
      localStorage.setItem("token", json.authtoken)
      navigate('/note')
      props.showalert("Login Successful", "success")
    } else {
      props.showalert("Invalid Credentials", "danger")
    }

  }
  return (
    <>
      <div className="login">
        <div className="loginmain">

        
        <div className="welcome">
          <h1>Welcome</h1>
        </div>
        <div className="credentials">
          <form onSubmit={handleonsubmit}>

            <div className='emaildiv'>
              <label htmlFor="email"></label>
              <input className='logininput' type="email" placeholder="Enter email" name='email' onChange={onChange} value={credentials.email} />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input className='logininput' type="password" placeholder="Password" name='password' onChange={onChange} value={credentials.password} />
            </div>
            <div className="btn">

            <button className='lg-btn' type="submit">Login</button>
            <Link to="/signup"><button className='signup'><span>Sign up</span></button></Link>
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

export default Login;

