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
                            <h4 className="text-center edu-heading" >10th / SSC </h4>
                            <h4 className="text-center m-0 mt-3">93.20% </h4>
                            <h5 className="text-center mt-2">(2016)</h5>
                            <h5 className="text-center mt-3">Kranti Vidyalaya Sawali, Medha</h5>

                        </div>
                        <div className="col-sm-5 p-0 margin-top-mb-12th">
                            <h4 className="text-center edu-heading">12th / HSC  </h4>
                            <h4 className="text-center m-0 mt-3">83.08% </h4>
                            <h5 className="text-center mt-2">(2018)</h5>
                            <h5 className="text-center mt-3">Mudhoji High School Phaltan</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;