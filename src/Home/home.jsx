import React from "react";
// import "./../Home/home.css";
import "./../Home/home.scss";

function Home() {
    return (
        <div className="col-sm-12 p-0">
            <div className="col-sm-10 p-0 mx-auto">
            
                <h1 className="text-center my-5">
                    Home
                </h1>

            <div className="col-sm-12 p-0 row m-0 ">
                <div className="col-sm-7 m-auto p-0">
                    <div className="col-sm-8 m-auto">
                    <div className="home-content-1 mb-2">
                        Hello, I am
                    </div>

                    <div className="home-content-2 mb-2">
                        Rupesh Kumbhar
                    </div>
                        <div class="typing-slider">
                            <p>A Software Engineer</p>
                            <p>Frontend Developer</p>
                            <p>A Student</p>
                    </div>

                    </div>
                </div>

                <div className="col-sm-5 p-0">
                    <div>
                    <img
                        src="assets/images/programming-man.svg"
                        alt="image"
                        className="home-img"
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;