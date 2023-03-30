import React from "react";
import './../spring-project/ecom-pro.scss';

function EcomPro() {
    return(
        <div className="col-sm-12 p-0 ">
            <h4 className="text-center mt-5 mb-3 ">Spring Ecom Project</h4>

            <div className="row m-0">
                <div className="col-sm-4 p-0 project-card-mb">
                    <div className="card">
                        
                        <img src="./assets/projects-images/spring-pro/spring-Ecom-pro.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">Ecom App for Laptop and Accessories</h5>
                                <p className="card-text">An ECommerce Project using Spring, React, Maven, Hibernate, MySQL with which we can perform CRUD Operations and Other User activities</p>
                                <div className="col-sm-12 p-0 text-center">
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        View More
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade modal-bg-color " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title main-heading-pro" id="staticBackdropLabel">Ecom App for Laptop and Accessories</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-sm-12 p-0 row m-0">
                                <h5 className="sub-heading-pro mb-4">
                                    An ECommerce Project using Spring, React, Maven, Hibernate, and MySQL :
                                </h5>

                                <div className="col-sm-5 p-0 row m-0 display-in-mb">
                                    <img src="./assets/projects-images/spring-pro/spring-Ecom-pro.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
                                </div>
                            <div className="col-sm-7 p-0 row m-0 modal-content-scroll">
                                <b className=" mb-2">
                                    <b>Technologies Used : </b>
                                </b>
                                <h5 className="sub-heading-pro mb-4">
                                    HTML,CSS,Bootstrap,MySQL,Spring,Hibernate, Spring Data JPA
                                    Spring, React, Maven, Hibernate, and MySQL :
                                </h5>
                                <li className=" mb-4">
                                    <b>Front-end : </b>
                                     The front-end of the application is built using React, which is a popular JavaScript library for building user interfaces. React provides reusable UI components that can be used to create a responsive and dynamic web application.
                                </li>

                                <li className=" mb-4">
                                    <b>Back-end : </b>
                                     The back-end of the application is built using Spring Framework, which includes Spring Boot and Hibernate. Spring Boot is a popular Java framework for building web applications, while Hibernate is an Object Relational Mapping (ORM) tool that simplifies database access. 
                                </li>

                                <li className="mb-4">
                                    <b>Database : </b>
                                     The application is MySQL as the database. MySQL is a popular open-source relational database management system that is widely used for web applications. Also used Spring JPA(Hibernate) to perform CRUD Operation
                                </li>

                                <li className="mb-4">
                                    <b>Build Tool : </b>
                                     The application is Maven as the build tool. Maven is a popular build automation tool that helps to manage dependencies and build the project. 
                                </li>

                                <li className="mb-4">
                                    <b>Development environment : </b>
                                      The application is developed using an Integrated Development Environment (IDE) such as Eclipse or STS(Spring Tool Suit) and VS Code
                                </li>

                                <li className="mb-4">
                                    <b>User Authentication and Authorization : </b>
                                       User authentication and authorization is implemented using Spring Security, which is a powerful and highly customizable security framework for Java applications. 
                                </li>

                                <li className="mb-4">
                                    <b>Payment Gateway Integration : </b>
                                     Payment gateway integration is implemented using a payment gateway API such as RozarPay
                                </li>
                            </div>
                            <div className="col-sm-5 p-0 row m-0 hide-in-mb">
                                <img src="./assets/projects-images/spring-pro/spring-Ecom-pro.svg" className="card-img-top w-100 mx-auto" alt="pro img" />
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

export default EcomPro;