import React from 'react'
import Footer from './Footer';
const Portfolio = () => {
  return (
    <div>

    
    <div style={{backgroundColor:"#000435"}}>
      <div className="image-container"style={{width:"100%",height:"100%",overflow:"hidden",boxSizing:"border-box",maxWidth:"100vw",transition:"transform0.3s ease-in-out"}}>
        <img src="/images/Port-folio.png" alt="full width" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",hover:"transform :scale(1.2})"}}></img>
      </div>
      <div className='image-container' style={{marginTop:"8%",boxSizing:"border-box"}}> 
        <h1 style={{marginRight:"50%",color:"white",marginBottom:"5%"}}>ALL CATEGORY</h1>
        <a href="https://thefashionfinds.in/" target="_blank" rel="noopener noreferrer">
        <img src="/images/Fashion-find.png" style={{width:"900px",height:"400px",marginLeft:"31%"}} alt='Fashion-find'></img>
        </a>
        <a href="https://corpfacilitators.com/"target="_blank"rel="noopener noreferrer">
        <img src="/images/Corp-web.png" style={{width:"900px",height:"400px",marginLeft:"31%",marginTop:"2%",marginBottom:"2%"}}alt="corpweb"></img>
        </a>
       
          </div>
      
      
    </div>
    <Footer/>
    </div>
  )
}

export default Portfolio;
