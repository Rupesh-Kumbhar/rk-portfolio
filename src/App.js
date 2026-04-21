// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Contact from './Contact/contact';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Education from './Education/education';
import Internship from './Internship/Internship';
import Home from './Home/home';
import Projects from './my-projects/projects';
import Skills from './skills/skills';
import JobExperince from './JobExperience/jobExperience';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          new develop created
          Now child rk branch created
          New branch rk 2 created
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className={darkMode ? "app dark" : "app light" }>
        {/* <h1>{darkMode ? "Dark Mode " : "Light Mode "}</h1> */}

        {/* <button
          type="button"
          className={darkMode ? "btn btn-light" : "btn btn-dark"}
          onClick={toggleDarkMode}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button> */}

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Navbar>
      <Home></Home>
      <Education></Education>
      <JobExperince></JobExperince>
      <Skills></Skills>
      <Projects></Projects>
      <Internship></Internship>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
