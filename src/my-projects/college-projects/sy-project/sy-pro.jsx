import React from "react";
import './../sy-project/sy-pro.scss'

function SyPro(){
    return (
        <div className="pro-card-width-33 p-0">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-12 p-0 mt-5 project-card-mb">
                <h4 className="text-center mb-3 ">BMI Calculator</h4>
                    <div className="card shadow pro-card-border">
                        
                        <img src="./assets/projects-images/react-pro/portfolio-img.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">BMI Calculator</h5>
                                <p className="card-text">This is BMI Calculator Mobile App in which we can calculate BMI of Person by giving Inputs like Gender, Height, Weight etc, We Developed it in SY of College . </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropSy">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade modal-bg-color " id="staticBackdropSy" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title main-heading-pro" id="staticBackdropLabel">BMI Calculator</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                BMI Calculator :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src="./assets/projects-images/react-pro/portfolio-img.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies/Languages Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    Flutter, Dart, Google Cloud etc :
                                </h5>
                                <li className=" mb-4">
                                    <b>Inputs : </b>
                                    <li>Gender</li>
                                    <li>Weight</li>
                                    <li>Height</li>
                                    <li>Age</li>
                                </li>

                                <li className=" mb-4">
                                    <b>Output : </b>
                                    <li>BMI</li>    
                                    <li>Workouts</li>
                                    <li>Increase/Decrease Weight</li>
                                    <li>Food Deit Plans</li>
                                </li>

                                <li className="mb-4">
                                    <b>Calculations/ References : </b>

                                </li>

                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src="./assets/projects-images/react-pro/portfolio-img.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
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

export default SyPro;