import './App.css';
import { useMediaQuery } from "react-responsive";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import{ BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import WebsiteDevelopment from './Components/WebsiteDevelopment';
import AppD from './Components/AppD';
import Dm from "./Components/Dm";
import GraphicDesign from "./Components/GraphicDesign";
import Scroll from './Components/Scroll';


const MyComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileComponent /> : <DesktopComponent />;
}; 
const MobileComponent = () => <h1>Mobile View 📱</h1>;
const DesktopComponent = () => <h1>Desktop View 💻</h1>;

function App() {
  return (
    <div className="App">
      <Router>
      <Scroll/>
      <Navbar/> 
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Footer" element={<Footer/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/portfolio" element={<Portfolio/>}/>
      <Route exact path="/contactUs" element={<ContactUs/>}/>
      <Route exact path="/WebsiteDevelopment" element={<WebsiteDevelopment/>}/>
      <Route exact path="/GraphicDesign" element={<GraphicDesign/>}/>
      <Route exact path="/Dm" element={<Dm/>}/>
      <Route exact path="/AppD" element={<AppD/>}/>
      </Routes>
      </Router>
     
      

    </div>
  );
}

export default App;
