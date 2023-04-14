import React from "react";
import { Link, Element } from 'react-scroll';
import './../Navbar/navbar.css'
// import { Link, animateScroll as scroll } from 'react-scroll';


function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Internship</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
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