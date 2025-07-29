import React from 'react'
import Footer from './Footer'
// import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Cont from './Cont';


const About = () => {
  return (
    <div>
      <div className="carousel-item active">
        <img src={`${process.env.PUBLIC_URL}/images/Home-image.jpg`}className="d-block w-100" alt="..." />
      </div>
 <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
 <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
 <br></br>
      <div className='main-container' style={{ background: "#000435", display: "flex", justifyContent: "space-between", marginTop: "10%" }}>
        <div className='leftone' style={{ marginLeft: "8%", marginTop: "10%" }}>
          <h3 style={{ color: "white", fontFamily: "initial", marginRight: "30%", fontSize: "6.5vh" }}>Take The Road To </h3>
          <h1 style={{ color: "white", fontFamily: "revert-layer", fontSize: "8vh" }}> Grow Your Business</h1>
          <br></br><br></br>
          <h4 style={{ color: "white", marginRight: "65%", fontSize: "5vh" }}> Follow Us

          </h4>
          <div className="icon" style={{ display: "flex", gap: "20px", marginLeft: "2%", marginTop: "5%", marginBottom: "5%" }}>
            <a href="https://facebook.com/share/191tCpdMHP/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-2xl" style={{ fontSize: "30px", color: "#1877F2" }} />
            </a>
            <a href="https://instagram.com/balajiitservices?igsh=eWg0aXE4Z21weW4=" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-2xl" style={{ fontSize: "30px", color: "#1877F2" }} />
            </a>
            <a href="https://linkedin.com/in/balajiitservices" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-2xl" style={{ fontSize: "30px", color: "#1877F2" }} />
            </a>

          </div>

        </div>
        <div className='rightone' style={{ marginRight: "10%", marginTop: "5%" }}>
          <h1 style={{ color: "white", fontFamily: "sans-serif" }}>Start A Conversation With Us  </h1>
          <Cont />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About; 
