import React,{useState} from 'react'
import Footer from './Footer';
import { FaArrowRight } from "react-icons/fa";

const WebsiteDevelopment = () => {
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
  
      const response = await fetch('https://formspree.io/f/xvgopggk', {
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
    
    <div style={{backgroundColor:"#000435"}}>
      <div className='main-container' style={{ display: "flex",justifyContent:"space-between" }}>
      
      
        <div className='leftone' style={{ marginleft: "2%", marginTop: "10%" }}>
         <h1 style={{color:"white",fontSize:"60px",marginLeft:"2%"}} >Digital Marketing</h1>
         <br/>
         <h3 style={{marginLeft:"22%",color:"white",fontSize:"20px"}}> </h3>
         
          <ul className="space-y-2" style={{color:"white",marginTop:"5%"}}>
          <h5  style={{marginRight:"%"}}> 
             <FaArrowRight className="text-blue-500">
             </FaArrowRight>Boost Search Engine Rankings<br></br> 
              </h5  > 
             <br></br>
              <h5 style={{marginRight:"15%"}}> 
             <FaArrowRight className="text-blue-500">
             </FaArrowRight>Attract Organic Leads <br></br> 
              </h5> 
             <br></br>
              <h5 style={{marginRight:"17%"}}> 
             <FaArrowRight className="text-blue-500">
             </FaArrowRight> Increase Site Authority<br></br> 
              </h5> 
             
          </ul>
        </div>
        <div className='rightone' style={{ marginRight: "6%", marginTop: "9%" }}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{width:"700px",height:"600px"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/Digital-netflix.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/Digital-seo.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/images/Digital-email.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
        </div>
      </div> 
      
      <div className='main-container' style={{ background: "#000435", display: "flex", justifyContent: "space-between" }}>
        <div className='leftone' style={{ marginLeft:"1%", marginTop: "8%" }}>

          <h1 style={{ color: "white", fontFamily: "revert-layer", fontSize: "50px" }}> Digital Marketing Services</h1><br></br>
          <h4 style={{color:"white"}}>
          Balaji IT  is a full-service agency comprised of leading Marketingfrom around the globe.
          </h4>
          <br></br><br></br><br></br>
          <h3 style={{color:"#87CEEB",marginRight:"50%"}}>Search Engine Optimisation</h3>
          <br></br><br></br><br></br>
          <h3 style={{color:"#87CEEB",marginRight:"51%"}}> Social Media Marketing</h3>
          <br></br><br></br><br></br>
          <h3 style={{color:"#87CEEB",marginRight:"55%"}}> E-mail Marketing</h3>
          <br></br><br></br><br></br>
          <h3 style={{color:"#87CEEB",marginRight:"55%"}}> Pay Per Click</h3>
         
        </div>
        <div className='rightone' style={{ marginRight: "8%", marginTop: "1%"}}>
        
          <div className="contact-form-container">
            <h2 style={{marginRight:"45%",color:"#87CEEB"}}> Request A Quote</h2>
            <h2 style={{marginRight:"22%"}}> Maximize Your Website’s Potential With Balaji_IT-Services  </h2>
            <h2 style={{marginRight:"50%"}}> </h2>
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
      <div className='final'>
      <img src="/images/All-final.png" alt="prop"></img>
    </div>
      <Footer/>
    </div>
  )
}

export default WebsiteDevelopment
