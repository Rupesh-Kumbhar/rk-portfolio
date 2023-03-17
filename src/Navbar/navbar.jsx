import React from "react";
import { Link, Element } from 'react-scroll';


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
                        {/* <h3>Rupesh Kumbhar</h3> */}
                        <ul class="navbar-nav ">
                        {/* me-auto mb-2 mb-lg-0 */}
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Intership</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                                {/* <Link to="/contact" smooth={true} duration={500}>Contact</Link> */}
                            </li>
                        
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;