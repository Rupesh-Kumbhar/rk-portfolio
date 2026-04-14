import React from "react";
import './../react-project/portfolio-pro.scss'

function ReactPro(){
    return(
        <div className="col-sm-12 p-0 ">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-4 p-0 mt-5 project-card-mb">
                <h4 className="text-center mb-4 "> <u>My Portfolio using React</u> </h4>
                    <div className="card shadow pro-card-border transform-hover">
                        
                        <img src="./assets/projects-images/react-pro/portfolio-img.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">My Portfolio Website</h5>
                                <p className="card-text">This is My Portfolio , developed using React, HTML, Sass, Bootstrap, Where I share with you my Skills and Expertise, with a range of Projects that highlight my Abilities. </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropReact">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade modal-bg-color " id="staticBackdropReact" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title main-heading-pro" id="staticBackdropLabel">My Portfolio Website</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                    My Portfolio Website using React, HTML, Sass, Bootstrap :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src={`${process.env.PUBLIC_URL}/assets/projects-images/react-pro/portfolio-img.svg`} className="card-img-top w-100 mx-auto mt-4" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    React, HTML, CSS, Bootstrap, etc :
                                </h5>
                                <div className="mb-4">
                                    <b>Home : </b>
                                    The Home section is landing page of website which consist of My Name and banner images,with attractive and Responsive design.
                                </div>

                                <div className=" mb-4">
                                    <b>Education : </b>
                                     The Education page contains information about Primary, Secondary, highest Educational qualification. 
                                </div>

                                <div className="mb-4">
                                    <b>Skills : </b>
                                     This Skills section showcases the Frameworks and Technologies, that I am familiar with 
                                </div>

                                <div className="mb-4">
                                    <b>Projects : </b>
                                    Projects section is consist of another Four Sections, and describes about Projects in detail with GitHub ,Live Project Link, Demo Video. 
                                </div>

                                <div className="mb-4">
                                    <b>Internship : </b>
                                      Intership section of website contains the information about Six months Full Time Internship that I have Completed in 7'th semister.
                                </div>

                                <div className="mb-4">
                                    <b>Contact : </b>
                                       You can always reach me by Contact details provided on My Portfolio Website . 
                                </div>

                                <div className="mb-4">
                                    <b>Footer : </b>
                                     Footer contains my GitHub, LinkedIn and Socials ! We can connect . 
                                </div>
                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                    <img src={`${process.env.PUBLIC_URL}/assets/projects-images/react-pro/portfolio-img.svg`} className="card-img-top w-100 mx-auto mt-4" alt="pro img" />
                            </div>
                            </div>

                        </div>
                        <div className="modal-footer justify-content-evenly">
                            <div className="col-sm-12 p-0 row m-0 not-display-flex-mb">
                                <div className="col p-0 row m-0 width-mb-100">
                                    <a class="" href="https://github.com/Rupesh-Kumbhar/rk-portfolio" target="_blank" rel="noopener noreferrer" role="button" type="button" className="btn modal-btn w-auto mr-3" data-toggle="tooltip" data-placement="top" title="Open on GitHub" >GitHub</a>
                                    <a class="" href="https://www.youtube.com/watch?v=9n2l8sXoQh0&t=1s" target="_blank" rel="noopener noreferrer" role="button" type="button" className="btn modal-btn w-auto mr-3" data-toggle="tooltip" data-placement="top" title="Open on YouTube" >Demo Video</a>
                                    <a class="" href="https://rupesh-kumbhar.github.io/rk-portfolio/" target="_blank" rel="noopener noreferrer" role="button" type="button" className="btn modal-btn w-auto" data-toggle="tooltip" data-placement="top" title="Open Live Link" >Live Link</a>
                                </div>
                                <div className="col p-0 row m-0 justify-content-end width-mb-100">
                                    <button type="button" className="btn btn-secondary w-auto" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReactPro;