import React from "react";
import { Link } from 'react-scroll';
import './../Navbar/navbar.scss'
// import { Link, animateScroll as scroll } from 'react-scroll';


function Navbar({ darkMode, toggleDarkMode }){

    const isMobile = window.innerWidth <= 768; 

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-top-fix">
                <div className="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">

                            <li className="nav-item d-flex">
                                <Link to="home" spy={true} smooth={true} offset={-100}
                                    duration={500} className="nav-link navbar-link-css " aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Home</Link>
                            </li>
                            
                            <li className="nav-item d-flex">
                                <Link to="job-exp" spy={true} smooth={true} offset={-100}
                                    duration={500} className="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Job Experience</Link>
                            </li>

                            <li className="nav-item d-flex">
                                <Link to="skills" spy={true} smooth={true} offset={-100}
                                    duration={500} className="nav-link navbar-link-css " aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px' , margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Skills</Link>
                            </li>

                            <li className="nav-item d-flex">
                                <Link to="projects" spy={true} smooth={true} offset={-100}
                                    duration={500} className="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Projects</Link>
                            </li>

                            <li className="nav-item d-flex">
                                <Link to="internship" spy={true} smooth={true} offset={-100}
                                    duration={500} className="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Internship</Link>
                            </li>

                            <li className="nav-item d-flex">
                                <Link to="contact" spy={true} smooth={true} offset={-100}
                                    duration={500} className="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <button type="button" className={`${darkMode ? "btn btn-light" : "btn btn-dark"} dark-mode-btn-pos`}  onClick={toggleDarkMode}>
                Toggle {darkMode ? "Light" : "Dark"} Mode
            </button> */}

            <div className="form-check form-switch dark-mode-btn-pos">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={toggleDarkMode}
                    checked={darkMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    {darkMode ? "Light" : "Dark"} Mode
                </label>
            </div>
        </div>
    );
}
export default Navbar;