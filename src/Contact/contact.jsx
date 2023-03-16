import React from "react";

function Contact() {
    return(
        
        <div className="col-sm-12 pt-5">
                    <div className="col-sm-12 pt-5 text-center">
                        <h1>Contact Us</h1>
                    </div>

                    <div className="col-sm-12 pt-5 text-center">
                        <h4>If you have any questions or concerns about our products or services, Please don't hesitate to contact us. Our customer service representatives are available to assist you with any queries you may have. </h4>
                        <h4 className="mt-4">You can reach us via Phone, Email</h4>
                    </div>

                    <div className="col-sm-12 pt-5 justify-content-center">
                        <div className="col-sm-9 pt-5 mx-auto">

                        <div className="col-sm-12 pt-5 row m-0">
                            <div className="col-sm-4 p-0 text-center">
                                <h5>
                                    Location
                                </h5>
                                <div className="pt-4">
                                    <img src="/assets/images/location.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-4 p-0 text-center">
                                <h5>Phone</h5>
                                <div className="pt-4">
                                    <img src="/assets/images/phone.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">Email</h5>
                                <div className="pt-4">
                                    <img src="/assets/images/email.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 pt-3 row m-0">
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">Pune, Maharashtra</h5>
                            </div>
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">+91 92847 43488</h5>
                            </div>
                            <div className="col-sm-4 p-0 text-center">
                                <h5 className="pb-2">rp.kumbhar2001@gmail.com</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 p-0 text-center pt-5 my-5">
                            <h3>Thank You !!</h3>
                        </div>
                        </div>
                    </div>

                    </div>
    );
}

export default Contact;