import React from "react";
import './../Education/education.scss'

function Education(){
    return(
        <div className="col-sm-12 p-0">
            <h1 className="text-center my-5">
                Education
            </h1>
            <div className="col-sm-12 p-0 m-0 ">
                <div className="col-sm-10 p-0 mx-auto ">
                    <div className="col-sm-12 p-0 row m-0 justify-content-center">
                        <div className="col-sm-5 p-0 ">
                            <h5 className="text-center edu-heading" >10th / SSC </h5>
                            <p className="text-center m-0 mt-3">93.20% </p>
                            <p className="text-center">(2016)</p>
                            <p className="text-center">Kranti Vidyalaya Sawali, Medha</p>

                        </div>
                        <div className="col-sm-5 p-0 margin-top-mb-12th">
                            <h5 className="text-center edu-heading">12th / HSC  </h5>
                            <p className="text-center m-0 mt-3">83.08% </p>
                            <p className="text-center">(2018)</p>
                            <p className="text-center">Mudhoji High School Phaltan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;