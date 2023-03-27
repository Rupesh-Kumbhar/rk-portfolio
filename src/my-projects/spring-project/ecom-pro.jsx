import React from "react";
import './../spring-project/ecom-pro.scss';

function EcomPro() {
    return(
        <div className="col-sm-12 p-0 ">
            <h4 className="text-center mt-5 mb-3 ">Spring Ecom Project</h4>

            <div className="row m-0">
                <div className="col-sm-4 p-0">
                    <div className="card">
                        
                        <img src="./assets/projects-images/spring-pro/spring-Ecom-pro.svg" className="card-img-top w-75 mx-auto" alt="pro img" />
                            <div className="card-body">
                                <h5 className="card-title">Ecom App for Laptop and Accessories</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="col-sm-12 p-0 text-center">
                                    <a href="#" className="btn btn-info">View More</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcomPro;