import React from "react";
import "./../JobExperience/jobExperience.scss";
import { parse, differenceInYears, differenceInMonths } from "date-fns";

function openJobOfferLetter() {
    window.open(`${process.env.PUBLIC_URL}/assets/jobOffer/Rupesh_Kumbhar_Offer_letter.pdf`, '_blank');
}

function JobExperince(){

    //const job_startDate = parse("June 2023", "MMMM yyyy", new Date()); // Fixed start date
    const promotion_startDate = parse("Jun 2023", "MMMM yyyy", new Date()); // Fixed start date
    const endDate = new Date(); // Current date
  
    const years = differenceInYears(endDate, promotion_startDate);
    const months = differenceInMonths(endDate, promotion_startDate) % 12;

    return (
      <div className="col-sm-12 p-0" id="job-exp">
        <div className="col-sm-10 p-0 mx-auto">
          <h1 className="text-center my-5">Job Experience</h1>

          <div className="col-sm-12 p-0 row m-0 ">
            <div className="col-sm-5">
              <div className="text-center">
                <img src={process.env.PUBLIC_URL + '/assets/images/job-img.svg'} alt="jobimage" className="job-img" />
              </div>
            </div>
            <div className="col-sm-7 m-auto ">
              <div className="col-sm-12 m-auto px-4">
                <div className="intern-content-2 mb-2 mt-4">Software Engineer</div>
                <p className="mb-0">
                {promotion_startDate.toLocaleString("default", { month: "short", year: "numeric" })} - Present (
                  {years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : ""}
                  {months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""})
                </p>
                <div className="intern-content-1 mb-2">
                  <a
                    href="https://www.cognizant.com/in/en"
                    target="_blank"
                    className="custom-link"
                    rel="noopener noreferrer"
                  >
                    @ Cognizant Technology Solutions
                  </a>
                </div>

                <div className="col-sm-12 m-auto">
                  <h4>Jr. Software Engineer</h4>
                <p className="mb-0">
                Jun 2024 - Dec 2025 (1.5 years)
                </p>
                </div>

                <div className="col-sm-12 p-0 my-3 row m-0">
                  <div className="w-auto w-auto-mb p-0 my-3 intern-btn-mb">
                    <button
                      className="btn btn-info intern-btn px-4"
                      onClick={openJobOfferLetter}
                    >
                      Job Offer Letter
                    </button>
                  </div>
                </div>

                <div className="col-sm-12 m-auto">
                  <h4>CSD Program - Technologies </h4>
                  <ul>
                    <li>HTML, CSS, Bootstrap</li>
                    <li>React, Node JS, Spring,Spring Boot </li>
                    <li>GitLab, GitHub</li>
                  </ul>
                </div>
                <div className="col-sm-12 p-0">
                  <p>
                    Throughout my work experience, I collaborated with my
                    colleagues to accomplish tasks and contribute to the
                    organization's goals.
                  </p>
                  <p>
                    Additionally, I had the opportunity to learn about various
                    frameworks such as Node.js, Postman, Figma, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default JobExperince;