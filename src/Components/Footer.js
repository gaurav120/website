import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className='font'> Balaji_IT_Services</h1>
        </div>
        <div className="footer-middle">
          <h4>Company</h4>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
          </ul>
        </div>
        
          <div className="footer-right">
            <h4> Address</h4>
            <address>
              <p> 94,Vishny garden colony, Sanganer Thana, Near Airport, Jaipur, Rajasthan, India</p>
              <p> 302029</p>
            </address>
          </div>
        
      </div>
      <div className='foot-cont'>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Balaji_IT_Services. All Rights Reserved.</p>
          <div className="icon" style={{ display: "flex", gap: "20px", marginLeft: "2%", marginTop: "5%", marginBottom: "5%" }}>
                      <a href="https://facebook.com/share/191tCpdMHP/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 text-2xl" style={{ fontSize: "30px", color: "white" }} />
                      </a>
                      <a href="https://instagram.com/balajiitservices?igsh=eWg0aXE4Z21weW4=" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 text-2xl" style={{ fontSize: "30px", color: "white" }} />
                      </a>
                      <a href="https://linkedin.com/in/balajiitservices" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 text-2xl" style={{ fontSize: "30px", color: "white" }} />
                      </a>
          
                    </div>
        </div>
        
      </div>
    </footer>

  );
};

export default Footer;

