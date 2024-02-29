import React from "react";
import './../fy-project/fy-pro.scss'

function FyPro(){
    return (
        <div className="pro-card-width-33 p-0 ">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-12 p-0 mt-5 project-card-mb">
                <h4 className="text-center mb-4 ">
                    <u>
                        EV Range Calculator
                    </u>
                </h4>
                    <div className="card shadow pro-card-border transform-hover">
                        
                        <img src="./assets/projects-images/college-pro/EVCalculator.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">EV Range Calculator</h5>
                                <p className="card-text">This is Electric vehicles Range-Calculator project in which we can calculate Range of EV by giving Inputs like Battery capacity, Battery type etc, We Presented it in Sci-Tech Event, Developed using C, C++ in FY of College . </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropFy">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade modal-bg-color " id="staticBackdropFy" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title main-heading-pro" id="staticBackdropLabel">EV Range Calculator</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                EV Range Calculator :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src="./assets/projects-images/college-pro/EVCalculator.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Languages Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    C, C++ :
                                </h5>
                                <li className=" mb-4">
                                    <b>Inputs : </b>
                                    <li>Km</li>
                                    <li>Km</li>
                                    <li>Km</li>
                                    <li>Km</li>
                                </li>

                                <li className=" mb-4">
                                    <b>Output : </b>
                                    <li>Km</li>
                                    <li>Km</li>
                                    <li>Km</li>
                                    <li>Km</li>
                                </li>

                                <li className="mb-4">
                                    <b>Calculations/ References : </b>

                                </li>

                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src="./assets/projects-images/college-pro/EVCalculator.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
                            </div>
                            </div>

                        </div>
                        <div class="modal-footer justify-content-evenly">
                            <div className="col-sm-12 p-0 row m-0 not-display-flex-mb">
                                <div className="col p-0 row m-0 width-mb-100">
                                    <button type="button" class="btn modal-btn w-auto mr-3">GitHub</button>
                                    <button type="button" class="btn modal-btn w-auto mr-3">Live Link</button>
                                    <button type="button" class="btn modal-btn w-auto">Demo Video</button>

                                </div>
                                <div className="col p-0 row m-0 justify-content-end width-mb-100">
                                    <button type="button" class="btn btn-secondary w-auto" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FyPro;