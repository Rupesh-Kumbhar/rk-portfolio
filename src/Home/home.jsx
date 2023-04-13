import React from "react";
// import "./../Home/home.css";
import "./../Home/home.scss";

function openPdfInNewTab() {
    window.open('/assets/my-resume/Rupesh_Kumbhar_Resume.pdf', '_blank');
  }

function Home() {

    return (
        <div className="col-sm-12 p-0">
            <head>
                <script src="/scripts/home-anim.js"></script>
            </head>
            <div className="col-sm-10 p-0 mx-auto">
            
                <h1 className="text-center my-5">
                    Home
                </h1>

            <div className="col-sm-12 p-0 row m-0 ">
                <div className="col-sm-7 m-auto p-0">
                    <div className="col-sm-8 m-auto col-sm-8-tablet-width">
                    <div className="home-content-1 mb-2">
                        Hello <span className="wave">👋</span>, I am
                    </div>

                    <div className="home-content-2 mb-2">
                        Rupesh Kumbhar
                    </div>
                        <div class="typing-slider">
                            <p>A Software Engineer 🚀 </p>
                            <p>Fullstack Developer 👨‍💻 </p>
                            <p>A Student 📚 </p>
                    </div>
                    <div className="col-sm-12 p-0 mt-3 resume-btn-mb">
                        <button className="btn btn-info resume-btn px-4" onClick={openPdfInNewTab}>My Resume</button>
                    </div>
                    </div>
                </div>

                <div className="col-sm-5 p-0 img-margin-mb">
                    <div>
                        
                    <img
                        src="assets/images/home-img.svg"
                        alt="image"
                        className="home-img animated"
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;