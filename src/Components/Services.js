import React from 'react'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
// import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div style={{backgroundColor:"#000435"}}>
  <div className='heading'>
    <br></br> <br></br>
   <h3 style={{color:"white",fontFamily:"unset"}}> FROM CONCEPT TO REALITY </h3>
   <br></br>
   <h1 style={{color:"white",fontFamily:"sans-serif",fontSize:"55px",marginTop:"3%"}}> Your Trusted Technology Partner, Delivering Customized IT Services To Accelerate Business Success</h1>
  </div>
    <br></br><br></br>
 
 <div className='main-container' style={{ display: "flex",justifyContent:"space-between" }}>
 <div className='leftone' style={{ marginLeft: "8%", marginTop: "10%" }}>
 <img src='/images/Website-development.jpg' className="d-block w-100" alt="..."  style={{width:"40px",height:"400px"}}/>

  </div>

  <div className='rightone' style={{ marginRight: "6%", marginTop: "10%" }}>
   <h1 style={{color:"white"}} > Website Development</h1>
   <br/>
   <h3 style={{marginLeft:"22%",color:"white",fontSize:"20px"}}>Custom web & app development with strategic
    sights to generate greater brand engagement </h3>
    <Link to="/WebsiteDevelopment">
    
  
    <button className=' click' style={{backgroundColor:"#2c67f2",width:"",marginTop:"5%",padding:"2%",fontFamily:"revert",color:"white",fontSize:"20px",transition: "color 0.3s ease"}}onMouseEnter={(e) => {e.currentTarget.style.color = "black"; e.currentTarget.style.transform = "scale(1)";}}
      onMouseLeave={(e) => {e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(0.9)";}} >Explore Website Development Services</button>   </Link>
    <ul className="space-y-2" style={{color:"white",marginTop:"7%"}}>
    <h5  style={{marginRight:"11%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>  Custom Website Design & Development<br></br> 
        </h5  > 
       
        <h5 style={{marginRight:"12%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>   Responsive & Mobile-Friendly Websites<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"28%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>  E-Commerce Development<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"9.5%"}} > 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>  Web Applications (React, Next.js, Node.js)  <br></br> 
        </h5> 
    </ul>
  </div>
  
</div>

<div className='main-container' style={{ display: "flex",justifyContent:"space-between" }}>


  <div className='rightone' style={{ marginRight: "6%", marginTop: "7%" }}>
   <h1 style={{color:"white"}} > Digital Marketing</h1>
   <br/>
   <h3 style={{marginLeft:"22%",color:"white",fontSize:"20px"}}>Digital marketing is the practice of promoting products or services using online channels such as search engines </h3>
   <Link to ="/Dm">
    <button className=' click' style={{backgroundColor:"#2c67f2",width:"",marginTop:"5%",padding:"2%",fontFamily:"revert",color:"white",fontSize:"20px",transition: "color 0.3s ease"}}onMouseEnter={(e) => {e.currentTarget.style.color = "black"; e.currentTarget.style.transform = "scale(1)";}}
      onMouseLeave={(e) => {e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(0.9)";}} >Explore Digital Marketing Services</button>    </Link>

    <ul className="space-y-2" style={{color:"white",marginTop:"5%"}}>
    <h5  style={{marginRight:"11%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>   Search Engine Optimization (SEO) <br></br> 
        </h5  > 
       
        <h5 style={{marginRight:"15%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>   Social Media Marketing (SMM)<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"32%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Email Marketing<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"15%"}} > 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Pay-Per-Click Advertising (PPC)  <br></br> 
        </h5> 
    </ul>
  </div>
  <div className='leftone' style={{ marginRight: "8%", marginTop: "5%" }}>
 <img src='/images/Digital-marketing.png' className="d-block w-100" alt="..."  style={{width:"40px",height:"400px"}}/>

  </div>
</div> 
<div className='main-container' style={{ display: "flex",justifyContent:"space-between" }}>
 <div className='leftone' style={{ marginLeft: "8%", marginTop: "5%" }}>
 <img src='/images/Android-development.jpg' className="d-block w-100" alt="..."  style={{width:"40px",height:"400px"}}/>

  </div>

  <div className='rightone' style={{ marginRight: "1%", marginTop: "7%" }}>
   <h1 style={{color:"white"}} > Android  Development</h1>
   <br/>
   <h3 style={{marginLeft:"18%",color:"white",fontSize:"20px"}}> Android development is the process of creating applications for devices running the Android operating system.</h3>
   <Link to="/AppD">
   <button className=' click' style={{backgroundColor:"#2c67f2",width:"",marginTop:"5%",padding:"2%",fontFamily:"revert",color:"white",fontSize:"20px",transition: "color 0.3s ease"}}onMouseEnter={(e) => {e.currentTarget.style.color = "black"; e.currentTarget.style.transform = "scale(1)";}}
      onMouseLeave={(e) => {e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(0.9)";}} >Explore Android Development Services</button>
   </Link>
   
    <ul className="space-y-2" style={{color:"white",marginTop:"7%"}}>
    <h5  style={{marginRight:"13%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>  Java & Kotlint<br></br> 
        </h5  > 
       
        <h5 style={{marginRight:"12%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Android Studio<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"10%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> jetpack Compose<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"11%"}} > 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Retrofit & Volley  <br></br> 
        </h5> 
    </ul>
  </div>
  
</div> 
<div className='main-container' style={{ display: "flex",justifyContent:"space-between" }}>
 

  <div className='rightone' style={{ marginRight: "6%", marginTop: "6%",marginBottom:"5%"  }}>
   <h1 style={{color:"white"}} > Graphic Design </h1>
   <br/>
   <h3 style={{marginLeft:"22%",color:"white",fontSize:"20px"}}>Graphic designing is the art of creating visual content to communicate messages effectively </h3>
   <Link to ="/GraphicDesign">
   
  
   <button className=' click' style={{backgroundColor:"#2c67f2",width:"",marginTop:"5%",padding:"2%",fontFamily:"revert",color:"white",fontSize:"20px",transition: "color 0.3s ease"}}onMouseEnter={(e) => {e.currentTarget.style.color = "black"; e.currentTarget.style.transform = "scale(1)";}}
      onMouseLeave={(e) => {e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(0.9)";}} >Explore Graphic Design Services</button>
     </Link>
    <ul className="space-y-2" style={{color:"white",marginTop:"7%"}}>
    <h5  style={{marginRight:"24%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Canva <br></br> 
        </h5> 
       
        <h5 style={{marginRight:"11%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Adobe Illustrator<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"20%"}}> 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight> Figma/XD<br></br> 
        </h5> 
       
        <h5 style={{marginRight:"10%"}} > 
       <FaArrowRight className="text-blue-500">
       </FaArrowRight>  Adobe Photoshop <br></br> 
        </h5> 
    </ul>
  </div>
  <div className='leftone' style={{ marginRight: "6%", marginTop: "5%",marginBottom:"6%" }}>
 <img src='/images/Graphic-home.jpg' className="d-block w-100" alt="..."  style={{width:"40px",height:"400px"}}/>

  </div>
</div> 


      <Footer/>
    </div>
  )
}

export default Services;
