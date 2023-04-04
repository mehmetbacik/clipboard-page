import React from "react";

function Footer() {
    return (
        <div id="footer">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-12 col-lg-3 mb-5 mb-lg-0">
                        <div className="img">
                            <img src="img/logo.svg" alt="logo" />
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 mb-5 mb-lg-0">
                        <div className="menu">
                            <span>FAQs</span>
                            <span>Privacy Policy</span>
                            <span>Install Guide</span>
                            <span>Contact Us</span>
                            <span>Press Kit</span>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-5">
                        <div className="social">
                            <div className="social-child">
                                <img src="img/icon-facebook.svg" alt="fb" />
                            </div>
                            <div className="social-child">
                                <img src="img/icon-twitter.svg" alt="tw" />
                            </div>
                            <div className="social-child">
                                <img src="img/icon-instagram.svg" alt="in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
