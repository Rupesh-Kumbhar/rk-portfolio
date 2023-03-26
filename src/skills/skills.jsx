import React from 'react';
import './../skills/skills.scss'

function Skills() {

    const mySkillName = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass','Bootstrap', 'Angular'];
    const mySkillImg = [
        './assets/frontend/html.svg',
        './assets/frontend/css.svg',
        './assets/frontend/javascript.svg',
        './assets/frontend/react.svg',
        './assets/frontend/sass.svg',
        './assets/frontend/bootstrap.svg',
        './assets/frontend/angular.svg',
      ];

    return(
        <div className="col-sm-12 p-0">
            <div className="col-sm-10 p-0 mx-auto">

                <h1 className="text-center my-5">
                    My Skills
                </h1>

                <h4 className="text-center my-5">
                    I am familiar with following Frameworks/Technologies                     
                </h4>
                <div className="col-sm-12 p-0 row m-0">

                    <div className="col-sm-4">
                        <h3 className="text-center mb-5">FrontEnd</h3>
                        <div className="row m-0 justify-content-center">
                            {mySkillName.map((skill, index) => (
                                <div className="col-md-4 mb-4" key={index}>

                                    <img src={mySkillImg[index]} className="card-img-top" alt={skill} />
                                    <h5 className="card-title text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <h3 className="text-center mb-5">Backend</h3>
                        <div className="row m-0 justify-content-center">
                            {mySkillName.map((skill, index) => (
                                <div className="col-md-4 mb-4" key={index}>

                                    <img src={mySkillImg[index]} className="card-img-top" alt={skill} />
                                    <h5 className="card-title text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <h3 className="text-center mb-5">Databases / Other</h3>
                        <div className="row m-0 justify-content-center">
                            {mySkillName.map((skill, index) => (
                                <div className="col-md-4 mb-4" key={index}>

                                    <img src={mySkillImg[index]} className="card-img-top" alt={skill} />
                                    <h5 className="card-title text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;  