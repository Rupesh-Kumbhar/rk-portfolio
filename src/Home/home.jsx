import React from "react";
import "./../Home/home.scss";

function openPdfInNewTab() {
    window.open(`${process.env.PUBLIC_URL}/assets/my-resume/Rupesh_Kumbhar.pdf`, '_blank');
}

function Home() {
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = `${process.env.PUBLIC_URL}/scripts/home-anim.js`;
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    return (
        <div className="col-sm-12 p-0" id="home">
            <div className="col-sm-10 p-0 mx-auto">
            
                <h1 className="text-center my-5 pt-1 ">
                    
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
                        <div className="typing-slider">
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
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img.svg`} className="home-img w-100" alt="home img" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;