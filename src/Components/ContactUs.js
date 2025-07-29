import React, { useState } from 'react';
import './ContactUs.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from './Footer';
// import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
    
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xqaerklv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('Message sent successfully!');
    } else {
      setStatus('Message failed to send. Please try again.');
    }
  };

  return (
    <div>
      <div className='main-container' style={{ background: "#000435", display: "flex", justifyContent: "space-between" }}>
        <div className='leftone' style={{ marginLeft: "7%", marginTop: "13%" }}>
          <h3 style={{ color: "white", fontFamily: "initial",marginRight:"60%" }}>Take The Road To </h3>
          <h1 style={{ color: "white", fontFamily: "revert-layer", fontSize: "12vh",marginRight:"40%" }}> Grow Your Business</h1>
          <div className="icon" style={{ display: "flex", gap: "20px", marginLeft: "1%", marginTop: "5%", marginBottom: "5%" }}>
            <h4 className='expert' style={{ color: "white", fontFamily: "initial", fontSize: "2.5vh" }}>Expert
              Team Members</h4>
            <h4 className='expert' style={{ color: "white", fontFamily: "initial", fontSize: "2.5vh" }}>Experienced Specialists</h4>
            <h4 className='expert' style={{ color: "white", fontFamily: "initial", fontSize: "2.5vh" }}>Skilled Professionals
            </h4>

          </div>
          <h4 style={{color:'white',marginRight:"48%",fontFamily:"unset"}}>
           PREMIUM DIGITAL AGENCY
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
        <div className='rightone' style={{ marginRight: "1%", marginTop: "5%"}}>
          <h2 style={{ color: "white", fontFamily: "sans-serif",fontSize:"6vh",marginRight:"10%" }}>Start A Conversation With Us  </h2>
          <h1 className='contact'style={{color:"white ",fontFamily:"sans-serif",marginRight:"55%",fontSize:"7vh" }}> Contact Us</h1>


          <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {status && <p className="form-status">{status}</p>}
      </form>
     
    </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

