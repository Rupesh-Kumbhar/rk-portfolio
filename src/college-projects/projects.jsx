import React from "react";
import './../college-projects/project.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Projects() {
    return (

        <div className="col-sm-12 p-0">
            <h1 className="text-center my-5">
                My Projects
            </h1>

            <div className="col-sm-12 p-0">
            <div className="col-sm-10 mx-auto p-0">
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Spring">
                        Spring Ecom Project
                    </Tab>
                    <Tab eventKey={2} title="React">
                        My Portfolio React 
                    </Tab>
                    <Tab eventKey={3} title="Angular" >
                        MERN UI/UX
                    </Tab>
                    <Tab eventKey={4} title="College Projects" >
                        <ul>
                            <li>FY Sci-Tech</li>
                            <li>SY Sci-Tech</li>
                            <li>TY Sci-Tech</li>
                            <li>B.Tech Alumini Tracking System</li>

                        </ul>

                    </Tab>
                </Tabs>
            </div>
            </div>
        </div>
    );
}

export default Projects;