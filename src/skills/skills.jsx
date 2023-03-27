import React from 'react';
import './../skills/skills.scss'

function Skills() {

    const mySkillFrontName = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass','Bootstrap', 'Angular'];
    const mySkillFrontImg = [
        './assets/frontend/html.svg',
        './assets/frontend/css.svg',
        './assets/frontend/javascript.svg',
        './assets/frontend/react.svg',
        './assets/frontend/sass.svg',
        './assets/frontend/bootstrap.svg',
        './assets/frontend/angular.svg'
      ];

    const mySkillBackName = ['JAVA','MySQL','MongoDB', 'Node', 'Spring'];
    const mySkillBackImg = [
        './assets/backend/java.svg',
        './assets/backend/mysql.svg',
        './assets/backend/mongodb.svg',
        './assets/backend/node.svg',
        './assets/backend/spring.svg'
    ];

    const mySkillDbOtherName = ['MySQL','MongoDB','Figma'];

    const mySkillOtherImg = [
        './assets/dbOtherTech/mysql.svg',
        './assets/dbOtherTech/mongodb.svg',
        './assets/dbOtherTech/figma.svg'
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
                <div className="col-sm-12 p-0 row m-0 justify-content-evenly">

                    <div className="width-33">
                        <h3 className="text-center mb-5">FrontEnd</h3>
                        <div className="row m-0 justify-content-center border-right shadow-lg">
                            {mySkillFrontName.map((skill, index) => (
                                <div className="col-md-4 my-3 text-center" key={index}>

                                    <img src={mySkillFrontImg[index]} className="skills-img " alt={skill} />
                                    <h5 className="skill-name text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="width-33 ">
                        <h3 className="text-center mb-5">Backend</h3>
                        <div className="row m-0 justify-content-center border-right shadow-lg">
                            {mySkillBackName.map((skill, index) => (
                                <div className="col-md-4 my-3 text-center" key={index}>

                                    <img src={mySkillBackImg[index]} className="skills-img" alt={skill} />
                                    <h5 className="skill-name text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="width-33 ">
                        <h3 className="text-center mb-5">Databases / Other</h3>
                        <div className="row m-0 justify-content-center border-right shadow-lg">
                            {mySkillDbOtherName.map((skill, index) => (
                                <div className="col-md-4 my-3 text-center" key={index}>

                                    <img src={mySkillOtherImg[index]} className="skills-img" alt={skill} />
                                    <h5 className="skill-name text-center mt-3">{skill}</h5>

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