import React from "react";
import './../Footer/footer.css'

function Footer() {
    return(
        <div className="col-sm-12 p-0 mt-5">
        <footer className="footer">
          <div className="container">
            <div className="col-sm-12 row m-0 ">
              <div className="col-sm-12 p-0 text-center mb-3">
                            <h3>My Socials !!</h3>
              </div>
              <div className="col-sm-12 p-0 row m-0 my-4">
              
              <div className="col-sm-3 p-0 d-flex justify-content-center py-2">
                <a href='https://www.linkedin.com/in/rupesh-kumbhar-54a9b6184/' target='_blank' rel="noopener noreferrer" className="d-flex footer-a-tag">
                  <img src='/assets/logos/linkedin.svg' alt='' className="social-logos mr-2" />
                  <span className="my-2">LinkedIn</span>
                </a>
              </div>

              <div className="col-sm-3 p-0 d-flex justify-content-center py-2">
                <a href='https://github.com/rupeshk2001' target='_blank' rel="noopener noreferrer" className="d-flex">
                  <img src='/assets/logos/github.svg' alt='' className="social-logos mr-2" />
                  <span className="my-2">GitHub</span>
                </a>
              </div>

              <div className="col-sm-3 p-0 d-flex justify-content-center py-2">
                <a href='https://www.instagram.com/rupesh_kumbhar_/?igshid=ZDdkNTZiNTM%3D' target='_blank' rel="noopener noreferrer" className="d-flex">
                  <img src='/assets/logos/instagram.svg' alt='' className="social-logos mr-2" />
                  <span className="my-2">Instagram</span>
                </a>
              </div>
             
              <div className="col-sm-3 p-0 d-flex justify-content-center py-2">
                <a href='https://www.facebook.com/rupesh.kumbhar.58173' target='_blank' rel="noopener noreferrer" className="d-flex">
                  <img src='/assets/logos/facebook.svg' alt='' className="social-logos mr-2" />
                  <span className="my-2">Facebook</span>
                </a>
              </div>
              </div>

            </div>
            <div className="col-sm-12 p-0 text-center mt-5">
              <p>
                  Made with <span className='footer_love wave'>&#10084;</span> by Rupesh
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
}
export default Footer;