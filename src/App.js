import React from 'react'
import Alert from './components/Alert';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Notes from "./components/Notes"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoteState from './context/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react'
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  return (
    <>
      <NoteState showalert={showalert}>

        <Router>
          <Navbar />
          <Alert alert={alert} />
          
            <Routes>
              <Route exact path="/" element={<Home showalert={showalert} />} />
              {//|make this notter(note)
              }
              <Route exact path="/note" element={<Notes showalert={showalert} />} />
              <Route exact path="/login" element={<Login showalert={showalert} />} />
              <Route exact path="/signup" element={<Signup showalert={showalert} />} />
              <Route exact path="/About" element={<About />} />



            </Routes>
          
          <footer>
            <footer> <small>&copy; Copyright 2023, Ajit Singh. All rights reserved</small> </footer>
          </footer>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
