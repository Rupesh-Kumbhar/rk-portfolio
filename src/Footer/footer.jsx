import React from "react";

function Footer() {
    return(
        <div className="col-sm-12 p-0 mt-5">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>About Us</h3>
                <p>
                "Shop with confidence at our E-commerce store. Our team is dedicated to providing the best online shopping experience possible."
                </p>
              </div>
              <div className="col-md-4">
                <h3>Contact Us</h3>
                <p>Pune, 411037 </p>
                <p>Maharashhtra, India</p>
                <p>Phone: (+91) 92847 43488</p>
                <p>Email: rp.kumbhar2001@gmail.com</p>
              </div>
              <div className="col-md-4">
                <h3>Follow Us</h3>
                <ul className="social-media">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook">Facebook</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter">Twitter</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram">Instagram</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube">Youtube</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
        </footer>
      </div>
    );
}
export default Footer;