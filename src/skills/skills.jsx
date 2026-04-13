import React from 'react';
import './../skills/skills.scss'

function Skills() {

    const mySkillFrontName = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass','Bootstrap', 'Angular'];
    const mySkillFrontImg = [
        `${process.env.PUBLIC_URL}/assets/frontend/html.svg`,
        `${process.env.PUBLIC_URL}/assets/frontend/css.svg`,
        `${process.env.PUBLIC_URL}/assets/frontend/javascript.svg`,
        `${process.env.PUBLIC_URL}/assets/frontend/react.svg`,
        `${process.env.PUBLIC_URL}/assets/frontend/sass.svg`,
        `${process.env.PUBLIC_URL}/assets/frontend/bootstrap.svg`,
        `${process.env.PUBLIC_URL}/assets/frontend/angular.svg`
      ];

    const mySkillBackName = ['JAVA','MySQL','MongoDB', 'Node', 'Spring'];
    const mySkillBackImg = [
        `${process.env.PUBLIC_URL}/assets/backend/java.svg`,
        `${process.env.PUBLIC_URL}/assets/backend/mysql.svg`,
        `${process.env.PUBLIC_URL}/assets/backend/mongodb.svg`,
        `${process.env.PUBLIC_URL}/assets/backend/node.svg`,
        `${process.env.PUBLIC_URL}/assets/backend/spring.svg`
    ];

    const mySkillDbOtherName = ['MySQL','MongoDB','Figma'];

    const mySkillOtherImg = [
        `${process.env.PUBLIC_URL}/assets/dbOtherTech/mysql.svg`,
        `${process.env.PUBLIC_URL}/assets/dbOtherTech/mongodb.svg`,
        `${process.env.PUBLIC_URL}/assets/dbOtherTech/figma.svg`
    ];
    return(
        <div className="col-sm-12 p-0" id="skills">
            <div className="col-sm-10 p-0 mx-auto">

                <h1 className="text-center my-5">
                    My Skills
                </h1>

                <h5 className="text-center mt-5 skill-line-mb">
                    I am familiar with following Frameworks/Technologies                     
                </h5>
                <div className="col-sm-12 p-0 row m-0 justify-content-evenly">

                    <div className="width-33">
                        <h4 className="text-center my-5">Frontend</h4>
                        <div className="row m-0 justify-content-center border-right transform-hover shadow-lg card-mb-width">
                            {mySkillFrontName.map((skill, index) => (
                                <div className="col-md-4 my-3 text-center skill-badge-width-mb" key={index}>

                                    <img src={mySkillFrontImg[index]} className="skills-img " alt={skill} />
                                    <h5 className="skill-name text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="width-33 ">
                        <h4 className="text-center my-5">Backend</h4>
                        <div className="row m-0 justify-content-center border-right transform-hover shadow-lg card-mb-width">
                            {mySkillBackName.map((skill, index) => (
                                <div className="col-md-4 my-3 text-center skill-badge-width-mb" key={index}>

                                    <img src={mySkillBackImg[index]} className="skills-img" alt={skill} />
                                    <h5 className="skill-name text-center mt-3">{skill}</h5>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="width-33 ">
                        <h4 className="text-center my-5">Databases / Other</h4>
                        <div className="row m-0 justify-content-center border-right transform-hover shadow-lg card-mb-width">
                            {mySkillDbOtherName.map((skill, index) => (
                                <div className="col-md-4 my-3 text-center skill-badge-width-mb" key={index}>

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