import React from 'react'
import "../css/home.css"
import graphic from "../assests/img.png"
import {
    Link
  } from "react-router-dom";
// import Notes from './Notes'
function Home(props) {
    //    const {showalert}=props
    return (
        <>
            <div className='home'>

                <div className="main">
                    <div className="heading">
                        <h1>Notter</h1>
                        <div className="subheading">
                            let's Note....
                        </div>
                    </div>

                    <div className="intro">
                        <p>Introducing our new note-taking app Notter, designed to simplify and streamline the way you capture, organize and access your notes.  Whether you're a student, professional, or just someone who likes to stay organized, Notter is the perfect tool to help you stay on top of your game.</p>
                    </div>

                    <div className="Login">
                        <p>Let's Get Started....</p>
                        <div className="homebtn">
                            <Link to="/login"><button className='login-btn'><span>Login</span></button></Link>
                            <Link to="/signup"><button className='signup-btn'><span>Sign up</span></button></Link>
                        </div>
                    </div>
                </div>
                <div className="graphic">
                    <img className='img' src={graphic} alt="graphic" srcSet="" />

                </div>
                {/* <Notes showalert={showalert} /> */}
            </div>
        </>
    )
}

export default Home