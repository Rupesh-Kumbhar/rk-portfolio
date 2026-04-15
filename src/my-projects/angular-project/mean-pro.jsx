import React from "react";
import './../angular-project/mean-pro.scss';

function MeanPro(){
    return(
        <div className="col-sm-12 p-0 ">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-4 p-0 mt-5 project-card-mb">
                <h4 className="text-center mb-4 "> <u>MEAN App CRUD Operations</u> </h4>
                    <div className="card shadow pro-card-border transform-hover">
                        
                        <img src={`${process.env.PUBLIC_URL}/assets/projects-images/angular-pro/mean-pro-img.svg`} className="card-img-top w-75 mx-auto mt-4" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">Simple CRUD Operations using MEAN App</h5>
                                <p className="card-text">This is Simple MEAN( MongoDB, ExpressJS, AngularJS, and NodeJS) App designed to Study how we can perform CRUD(Create, Read, Update, Delete) Operations. </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropAngular">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade modal-bg-color " id="staticBackdropAngular" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title main-heading-pro" id="staticBackdropLabel">MEAN App CRUD Operations</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                Simple CRUD Operations using MEAN App :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src={`${process.env.PUBLIC_URL}/assets/projects-images/angular-pro/mean-pro-img.svg`} className="card-img-top w-100 mx-auto mt-4" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    Angular, MongoDB, ExpressJS, NodeJS  HTML, CSS, Bootstrap, etc :
                                </h5>
                                <div className="mb-4">
                                    <b>Create : </b>
                                    Create involves Adding New data to the database. In a MEAN app, this can be achieved by sending a POST request from the front-end AngularJS application to a corresponding route in the ExpressJS framework, and saves it to the MongoDB database.
                                </div>

                                <div className="mb-4">
                                    <b>Read : </b>
                                    Read involves Detching data . In a MEAN app, this can be achieved by GET request from the front-end to a corresponding route in the ExpressJS framework, and retrieves data from the MongoDB database and sends it back to the front-end application.
                                </div>

                                <div className="mb-4">
                                    <b>Update : </b>
                                    Update involves modifying existing data in the database. In a MEAN app, this is by sending a PUT request to a corresponding route in the ExpressJS framework, and then it gets updated, and saved back to the database.
                                </div>

                                <div className="mb-4">
                                    <b>Delete : </b>
                                    Delete involves removing data from the database. In a MEAN app, this is achieved by sending DELETE request to a corresponding route in the ExpressJS framework, and then it get deleted from the database.  
                                </div>

                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src={`${process.env.PUBLIC_URL}/assets/projects-images/angular-pro/mean-pro-img.svg`} className="card-img-top w-100 mx-auto mt-4" alt="pro img" />
                            </div>
                            </div>

                        </div>
                        <div className="modal-footer justify-content-evenly">
                            <div className="col-sm-12 p-0 row m-0 not-display-flex-mb">
                                <div className="col p-0 row m-0 width-mb-100">
                                    <a class="" href="https://github.com/Rupesh-Kumbhar/mean-backend/tree/backend" target="_blank" rel="noopener noreferrer" role="button" type="button" className="btn modal-btn w-auto mr-3" data-toggle="tooltip" data-placement="top" title="Open on GitHub" >GitHub</a>
                                    <a class="" href="https://www.youtube.com/watch?v=9n2l8sXoQh0&t=1s" target="_blank" rel="noopener noreferrer" role="button" type="button" className="btn modal-btn w-auto mr-3" data-toggle="tooltip" data-placement="top" title="Open on YouTube" >Demo Video</a>
                                    <a class="" href="#" target="_blank" rel="noopener noreferrer" role="button" type="button" className="btn modal-btn w-auto" data-toggle="tooltip" data-placement="top" title="Open Live Link" >Live Link</a>
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

export default MeanPro;