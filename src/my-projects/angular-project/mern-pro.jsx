import React from "react";
import './../angular-project/mern-pro.scss';

function MernPro(){
    return(
        <div className="col-sm-12 p-0 ">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-4 p-0 mt-5 project-card-mb">
                <h4 className="text-center mb-3 ">MEAN App CRUD Operations</h4>
                    <div className="card shadow pro-card-border">
                        
                        <img src="./assets/projects-images/angular-pro/mern-pro-img.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">Simple CRUD Operations using MEAN App</h5>
                                <p className="card-text">This is Simple MEAN( MongoDB, ExpressJS, AngularJS, and NodeJS) App designed to Study how we can perform CRUD(Create, Read, Update, Delete) Operations. </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropAngular">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade modal-bg-color " id="staticBackdropAngular" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title main-heading-pro" id="staticBackdropLabel">MEAN App CRUD Operations</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                Simple CRUD Operations using MEAN App :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src="./assets/projects-images/angular-pro/mern-pro-img.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    Angular, MongoDB, ExpressJS, NodeJS  HTML, CSS, Bootstrap, etc :
                                </h5>
                                <li className=" mb-4">
                                    <b>Create : </b>
                                    Create involves Adding New data to the database. In a MEAN app, this can be achieved by sending a POST request from the front-end AngularJS application to a corresponding route in the ExpressJS framework, and saves it to the MongoDB database.
                                </li>

                                <li className=" mb-4">
                                    <b>Read : </b>
                                    Read involves Detching data . In a MEAN app, this can be achieved by GET request from the front-end to a corresponding route in the ExpressJS framework, and retrieves data from the MongoDB database and sends it back to the front-end application.
                                </li>

                                <li className="mb-4">
                                    <b>Update : </b>
                                    Update involves modifying existing data in the database. In a MEAN app, this is by sending a PUT request to a corresponding route in the ExpressJS framework, and then it gets updated, and saved back to the database.
                                </li>

                                <li className="mb-4">
                                    <b>Delete : </b>
                                    Delete involves removing data from the database. In a MEAN app, this is achieved by sending DELETE request to a corresponding route in the ExpressJS framework, and then it get deleted from the database.  
                                </li>

                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src="./assets/projects-images/angular-pro/mern-pro-img.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
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
    );
}

export default MernPro;