import React from "react";
import { Link, Element } from 'react-scroll';
import './../Navbar/navbar.scss'
// import { Link, animateScroll as scroll } from 'react-scroll';


function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light nav-top-fix">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ">

                            <li class="nav-item d-flex">
                                <Link to="home" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css " aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} >Home</Link>
                            </li>
                            
                            <li class="nav-item d-flex">
                                <Link to="job-exp" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} >Job Experience</Link>
                            </li>

                            <li class="nav-item d-flex">
                                <Link to="skills" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css " aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px' , margin: 'auto', padding: '0.5rem' }} >Skills</Link>
                            </li>


                            <li class="nav-item d-flex">
                                <Link to="projects" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} >Projects</Link>
                            </li>

                            <li class="nav-item d-flex">
                                <Link to="internship" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} >Internship</Link>
                            </li>

                            <li class="nav-item d-flex">
                                <Link to="contact" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} >Contact</Link>
                            </li>


                            {/* <li class="nav-item">
                                <Link class="nav-link" to="home" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="education" smooth={true} duration={500}>Education</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="internship" smooth={true} duration={500}>Internship</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;