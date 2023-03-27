import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar/navbar';
import Contact from './Contact/contact';
import Footer from './Footer/footer';
import Education from './Education/education';
import Internship from './Internship/Internship';
import Home from './Home/home';
import Projects from './my-projects/projects';
import Skills from './skills/skills';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar></Navbar>
    <Home></Home>
    <Education></Education>
    <Skills></Skills>
    <Projects></Projects>
    <Internship></Internship>
    <Contact></Contact>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
