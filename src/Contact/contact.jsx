import React from "react";
import './../Contact/contact.css'

function Contact() {
    return(
        
        <div className="col-sm-12 pt-5">
            <div className="col-sm-12 text-center">
                <h1>We can Connect !</h1>
            </div>

            <div className="col-sm-9 pt-5 mx-auto  text-center">
                <h4 className="contact-text-mb-1">
                    If you have any questions or would like to discuss Potential Job Opportunities or collaborations, I would be happy to connect with you and learn more.    
                </h4>
                <h4 className="mt-4 contact-text-mb-2">I am available to Get in Touch via Phone, Email</h4>
            </div>

            <div className="col-sm-12 pt-5 justify-content-center">
                        <div className="col-sm-9 pt-5 mx-auto no-padding-top-mb">

                        <div className="col-sm-12 pt-5 row m-0 ">
                            <div className="col-sm-4 p-0 text-center">
                                <h5>
                                    Location
                                </h5>
                                <div className="my-4">
                                    <img src="/assets/images/location.svg" alt="" />
                                </div>
                                <h5 className="pb-2">Phaltan, Satara, Maharashtra</h5>
                            </div>
                            <div className="col-sm-4 p-0 text-center phone-email-mb">
                                <h5>Phone</h5>
                                <div className="my-4">
                                    <img src="/assets/images/phone.svg" alt="" />
                                </div>
                                <h5 className="pb-2">+91 92847 43488</h5>
                            </div>
                            <div className="col-sm-4 p-0 text-center phone-email-mb">
                                <h5 className="pb-2">Email</h5>
                                <div className="my-4">
                                    <img src="/assets/images/email.svg" alt="" />
                                </div>
                                <h5 className="pb-2">rp.kumbhar2001@gmail.com</h5>
                            </div>
                        </div>

                        {/* <div className="col-sm-12 pt-3 row m-0">
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">Pune, Maharashtra</h5>
                            </div>
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">+91 92847 43488</h5>
                            </div>
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">rp.kumbhar2001@gmail.com</h5>
                            </div>
                        </div> */}
                        
                        </div>
            </div>

            <div className="col-sm-12 p-0 justify-content-center mt-5">
                <div className="text-center">
                    <h1>Map</h1>
                </div>
                <div className="my-5">
                    <iframe src="./location-map.html" width="100%" height="500px"></iframe>
                </div>
            </div>
                    

        </div>
    );
}

export default Contact;