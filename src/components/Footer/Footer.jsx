import React from "react";
import "./Footer.css";
import facebook_icon from '../../assets/facebook.png'
import linkedin_icon from '../../assets/linkedin.png'
import twitter_icon from '../../assets/twitter.png'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer">
                <h1 className="footer-head">TalkItEasy.</h1>
                <p className="footer-para">
                Unlock Your Future with English Proficiency for ITI Students
                </p>
                <div className=" col-md-5 col-lg-3 col-sm-12 mx-auto social-links py-4 d-flex align-items-center justify-content-around">
                    <img src={twitter_icon} alt="" />
                    <img src={linkedin_icon} alt="" />
                    <img src={facebook_icon} alt="" />
                </div>
                <h3 className="contact text-white">Contact Us</h3>
                <h6 className="text-white">Email: info@talkiteasy.com</h6>
                <h6 className="text-white">Phone: +91-7994296732</h6>
                <h6 className="text-white">Head Office:
                Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577</h6>
            </div>
            <div className="footer-bottom d-flex justify-content-between">
                <div className="copyright">Copyright &copy; TalkItEasy. 2024</div>
                <div>
                    <ul className="d-flex footer-bottom-list">
                        <a className="px-3" href="#"><li>Home</li></a>
                        <a className="px-3" href="#why"><li>About Us</li></a>
                        <a className="px-3" href=""><li>Contact Us</li></a>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
