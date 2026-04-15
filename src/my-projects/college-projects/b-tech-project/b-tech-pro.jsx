import React from "react";
import './../b-tech-project/b-tech-pro.scss'

function BtechPro(){
    return (
        <div className="pro-card-width-33 p-0">

            <div className="row m-0 justify-content-evenly">
                <div className="col-sm-12 p-0 mt-5 project-card-mb">
                    <h4 className="text-center mb-4 ">
                        <u>
                            Alumini Tracking System
                        </u>
                    </h4>
                    <div className="card shadow pro-card-border transform-hover">
                        
                        <img src={`${process.env.PUBLIC_URL}/assets/projects-images/college-pro/alumini-img.svg`} className="card-img-top w-75 mx-auto mt-4" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">Alumini Tracking System</h5>
                                <p className="card-text">This is Alumini Tracking System web App in which we can do Login-Register of User and Admin. Also user(Student) can enter info like company name, working domain etc, We Developed it in B.Tech . </p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropBtech">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade modal-bg-color " id="staticBackdropBtech" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title main-heading-pro" id="staticBackdropLabel">Alumini Tracking System</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                Alumini Tracking System :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src={`${process.env.PUBLIC_URL}/assets/projects-images/college-pro/alumini-img.svg`} className="card-img-top w-100 mx-auto mt-4" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies/Languages Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    HTML, CSS, Bootstap, Angular, NodeJS, MongoDB :
                                </h5>
                                
                                <div className="mb-4">
                                    <b>Visitors </b>
                                    Visitors can able to explore other part of website such as Home, Gallery, About, Contact
                                </div>

                                <div className=" mb-4">
                                    <b>Login/Registration : </b>
                                    User can login as Normal User and as Admin, with given conditions and filling Required feilds such as Name, Email, Password, Confirm Password
                                </div>

                                <div className=" mb-4">
                                    <b>User Role : </b>
                                    Normal user(Student) can fill information and save it, update it, view it and explore other content of website
                                </div>

                                <div className="mb-4">
                                    <b>Admin Role : </b>
                                    Admin can perform all CRUD(Create, Read, Update, Delete) Operations.
                                </div>


                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src={`${process.env.PUBLIC_URL}/assets/projects-images/college-pro/alumini-img.svg`} className="card-img-top w-100 mx-auto mt-4" alt="pro img" />
                            </div>
                            </div>

                        </div>
                        <div className="modal-footer justify-content-evenly">
                            <div className="col-sm-12 p-0 row m-0 not-display-flex-mb">
                                <div className="col p-0 row m-0 width-mb-100">
                                    <button type="button" className="btn modal-btn w-auto mr-3">GitHub</button>
                                    <button type="button" className="btn modal-btn w-auto mr-3">Live Link</button>
                                    <a href="https://drive.google.com/file/d/1MbDToaycgD6WxBWg3MCIcc6cxpvtVe-c/view?usp=sharing" target="_blank" rel="noreferrer" className="btn modal-btn w-auto mr-3">Demo Video </a>
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
    )
}

export default BtechPro;