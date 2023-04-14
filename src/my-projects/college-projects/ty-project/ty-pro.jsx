import React from "react";
import './../ty-project/ty-pro.scss'

function TyPro(){
    return (
        <div className="pro-card-width-33 p-0">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-12 p-0 mt-5 project-card-mb">
                <h4 className="text-center mb-3 ">
                    <u>
                        Voice Assistance for Windows
                    </u> 
                </h4>
                    <div className="card shadow pro-card-border transform-hover">
                        
                        <img src="./assets/projects-images/college-pro/VoiceAssistance-img.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">Voice Assistance for Windows</h5>
                                <p className="card-text">This is Voice Assistance for Windows Mobile App in which we can automate Regular tasks like Send Email,Play Music,Do Wikipedia search and get it done by Voice, We Developed it in TY of College . </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropTy">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade modal-bg-color " id="staticBackdropTy" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title main-heading-pro" id="staticBackdropLabel">Voice Assistance for Windows</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                Voice Assistance for Windows :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src="./assets/projects-images/college-pro/VoiceAssistance-img.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies/Languages Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    Python,  etc :
                                </h5>
                                <li className=" mb-4">
                                    <b>Inputs : </b>
                                    <li>Send Email to "demo@gmail.com"</li>
                                    <li>Play Music</li>
                                    <li>Open VS Code</li>
                                    <li>Open Google, Youtube</li>
                                </li>

                                <li className=" mb-4">
                                    <b>Output : </b>
                                    <li>It will open window to send corresponding Email</li>    
                                    <li>It will Play Music</li>
                                    <li>It will Open VS Code </li>
                                    <li>It will Open Google, Youtube</li>
                                </li>

                                <li className="mb-4">
                                    <b>Calculations/ References : </b>

                                </li>

                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src="./assets/projects-images/college-pro/VoiceAssistance-img.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
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

export default TyPro;