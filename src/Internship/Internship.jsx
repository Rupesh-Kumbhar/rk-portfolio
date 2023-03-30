import React from "react";
import "./../Internship/Internship.scss";

function Internship(){
    return (
        <div className="col-sm-12 p-0">
            <div className="col-sm-10 p-0 mx-auto">
                <h1 className="text-center my-5">
                Internship
                </h1>

                <div className="col-sm-12 p-0 row m-0 ">
                    <div className="col-sm-5">
                        <div className="text-center">
                            <img src="assets/images/intern-img.jpg" alt="image" className="intern-img"/>
                        </div>
                    </div>
                    <div className="col-sm-7 m-auto ">
                        <div className="col-sm-12 m-auto px-4">
                            <div className="intern-content-2 mb-2 mt-4">
                                Front-End Web Developer
                            </div>
                            
                            <div className="intern-content-1 mb-3">
                                6 Months Full-Time Internship
                            </div>

                            <div class="col-sm-12 m-auto">
                                <h4>Technologies Worked on</h4>
                                <ul>
                                    <li>HTML, CSS, Bootstrap</li>
                                    <li>Angular, Node JS </li>
                                    <li>GitLab, GitHub</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 p-0">
                                <p>Throughout my internship, I collaboratively worked with my team members 
                                    to design and develop webpages which were visually appealing, functional and user-friendly and Responsive.
                                     </p>
                                <p>
                                I also had the chance to learn about Angular Framework, Node JS,Postman, Figma etc
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Internship;