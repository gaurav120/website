import React from 'react'
import Footer from './Footer';
import './Balaji.css';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
   
    <div className='newclass' style={{backgroundColor:"#000435"}}>
    
    <div  className="video-container"> 
    <video autoPlay loop muted playsInline className="background-video">
    <source src="/Bgvideo/web video3.mp4" type="video/mp4" />
       
      </video>
      <div className="text-overlay">
        <h4 style={{fontSize:"2rem"}}> Premium Web Development Agency</h4>
        <h1 style={{color:"white",fontSize:"5rem",marginLeft:"14%",marginTop:"2%"}}>We Grow Business Online</h1>
        <h4 style={{marginLeft:"%",marginTop:"2%"}}>Custom Websites, Branding & Digital Marketing</h4>
      </div>
    </div>
    <div className='hori'>
    <hr className="horizontal-line" />
    </div>

    <div className='main-container' style={{ background: "#000435", display: "flex", justifyContent: "space-between" }}>
        <div className='leftone' style={{ marginLeft: "2%", marginTop: "5%",color:"white"}}>
          <h1 style={{fontFamily:"fantasy"}}> Creative Web Agency Delivering Custom Solutions</h1>
          <br>
          </br><br></br>
          <h4> Custom Web Design Solutions To Drive Conversions</h4><br>  
          </br><br></br>
          <h4> Effective Marketing Campaigns To Generate Growth</h4><br>
          </br><br></br>
          <h4> Tailored Branding Strategies To Drive Engagement</h4><br>
          </br>
          <div>
          <h7 style={{marginLeft:"1%",maxWidth:"30%",fontFamily:"c"}}>  Balaji IT Services is a web design company & digital marketing 
            agency focused
           on growing brands online. We create effective brand strategies, custom web design,
            development, and digital marketing solutions to generate greater brand engagement 
            and conversions. We work closely with our clients to ensure each project meets their
             brand guidelines and business goals and provide technical and marketing expertise to ensure optimal results.</h7> 
          </div>
        </div>
        <div className='rightone' style={{ marginTop: "5%",marginRight:"5%" }}>
          <img src="/images/Creative-web.png" alt="prop" style={{width:"600px",height:"600px"}}></img>
         
        </div>

      </div>
      <div className='hori'>
    <hr className="horizontal-line" />
    </div>

    <div className="carousel-item active" style={{ width: "45%", height: "50%", marginLeft: "54%",marginTop:"6%",backgroundColor:"#000435" }}>
            <img src="/images/Our-solutions.jpg" className="d-block w-100" alt="..." />
          </div>
           
    <h1 style={{color:"white", marginTop: "6%",marginRight:"65%",backgroundColor:"#000435" }}> OUR SOLUTIONS</h1>
    <h1 style={{ marginLeft: "5%",maxWidth:"45%",backgroundColor:"#000435",color:"white"  }}> We help people's stay ahead of the curve</h1>
    <h4 style={{color:"white",marginTop:"6%",fontFamily:"-moz-initial",maxWidth:"50%",marginLeft:"2%",backgroundColor:"#000435" }}> Specializing in IT Consulting and Talent Solutions, we connect business strategy and technology to drive measurable results</h4>
      <div style={{backgroundColor:" 	#FAF9F6",}}> 
      <h1 style={{marginTop:"15%"}}> Our Services</h1>  
      
    
  <div style={{ display: "flex", flexWrap: "wrap", }}>
      <div className="card" style={{width: "18rem",marginTop:"5%",marginLeft:"5%" ,height:"40vh"}}>
  <img src="/images/Website-development.jpg" className="card-img-top" alt=" "/>
  <div className="card-body">
    <Link to="/WebsiteDevelopment">
    <h5 className="card-title"> Website Development</h5>
    </Link>
   
  </div>
</div>

  
<div className="card" style={{width: "18rem",marginTop:"5%",marginLeft:"5%"}}>
  <img src="/images/Graphic-home.jpg" className="card-img-top" alt=" "/>
  <div className="card-body">
    <Link to="/GraphicDesign">
    <h5 className="card-title"> Graphic Design</h5>
    </Link>
  
  </div>
</div>

<div className="card" style={{width: "18rem",marginTop:"5%" ,marginLeft:"5%"}}>
  <img src="/images/Androiddeve-home.jpg" className="card-img-top" alt=" "/>
  <div className="card-body">
    <Link to="/AppD">
    <h5 className="card-title"> Android Development </h5>
    </Link>
   
  </div>
</div>
 
<div className="card" style={{width: "18rem",marginTop:"5%" ,marginLeft:"5%"}}>
  <img src="/images/Digital-marketing.png" className="card-img-top" alt=" "/>
  <div className="card-body">
    <Link to="/Dm">
    <h5 className="card-title">Digital Marketing</h5>
    </Link>
   
  </div>
</div>
</div>

</div>


           
    
   <Footer/>
      </div>  
  )
}

export default Home;

