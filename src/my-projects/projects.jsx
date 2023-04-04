import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EcomPro from "./spring-project/ecom-pro";
import ReactPro from "./react-project/portfolio-pro"; 
import './../my-projects/project.scss'
import MeanPro from "./angular-project/mean-pro";
import FyPro from "./college-projects/fy-project/fy-pro";
import SyPro from "./college-projects/sy-project/sy-pro";
import TyPro from "./college-projects/ty-project/ty-pro";
import BtechPro from "./college-projects/b-tech-project/b-tech-pro";


function Projects() {
    return (

        <div className="col-sm-12 p-0">
            <h1 className="text-center my-5">
                My Projects
            </h1>

            <div className="col-sm-12 p-0">
            <div className="col-sm-10 mx-auto p-0">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

                    <Tab eventKey={1} title="Spring">
                        <EcomPro></EcomPro>
                    </Tab>

                    <Tab eventKey={2} title="React">
                        <ReactPro></ReactPro>
                    </Tab>

                    <Tab eventKey={3} title="Angular" >
                        <MeanPro></MeanPro>
                    </Tab>

                    <Tab eventKey={4} title="College Projects" >
                        <div className="col-sm-12 p-0 row m-0 justify-content-evenly">
                            <FyPro></FyPro>
                            <SyPro></SyPro>
                            <TyPro></TyPro>
                            <BtechPro></BtechPro>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            </div>
        </div>
    );
}

export default Projects;