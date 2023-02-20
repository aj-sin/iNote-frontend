import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'

import "../css/Navbar.css"
import {
    Link,useNavigate
  } from "react-router-dom";
  
  function Navbar() {
    const context = useContext(NoteContext)
    const { USER} = context
    console.log(USER)
    
   
    
    const navigate = useNavigate()
    const handlelogout=()=>{
      localStorage.removeItem('token')
      navigate("/login")
    }
   
  return (
    <>
    <nav >
  
      <ul className="navbar">
        <li className="nav-item">
          <Link className= "nav-title list-items" aria-current="page" to="/">Notter</Link>
        </li>
        <li className="nav-item">
          <Link className= "list-items" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="list-items" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="list-items" to="/note">My Notes</Link>
        </li>
       
        
      </ul>
      <ul className='icon'>
        {/* <li className='accounticon'>
           A
        </li> */}
        <div className="dropdown">
    <button className="dropbtn">
    <i className="fa-solid fa-user"></i>
    </button>
    {localStorage.getItem('token')?<div className="dropdown-content">
      <li className='drop-item' >{USER.Name}</li>
      <li className='drop-item' >{USER.email}</li>
      <li className='drop-item'><button onClick={handlelogout}><strong>Logout</strong></button></li>
    </div>:<div></div>}
  </div>
      </ul>
      {/* {!localStorage.getItem('token')? <form className='d-flex'><Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary" to="/signup" role="button">Sign Up</Link></form>:<button onClick={handlelogout} className="btn btn-primary">Logout</button>} */}
    
  
</nav>
    </>
  )
}

export default Navbar