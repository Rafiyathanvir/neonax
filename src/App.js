import './App.css';
import AboutUs from './Component/About/AboutUs';
//import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/HomePage/Home';
import Navbar from './Component/Navbar';
//import Product01 from './Component/Products/Product01/Product01'
//import Product02 from './Component/Products/Product02/Product02'
//import Product03 from './Component/Products/Product03/Product03'
//import Product04 from './Component/Products/Product04/Product04'
//import Product05 from './Component/Products/Product05/Product05'
//import Product06 from './Component/Products/Product06/Product06'

//import Application01 from './Component/Application/Application01/Application01'
//import Application02 from './Component/Application/Application02/Application02'
//import Application03 from './Component/Application/Application03/Application03'
//import Application04 from './Component/Application/Application04/Application04'
//import Application05 from './Component/Application/Application05/Application05'
//import Application06 from './Component/Application/Application06/Application06'
//import Application07 from './Component/Application/Application07/Application07'
//import Application08 from './Component/Application/Application08/Application08'
//import Application09 from './Component/Application/Application09/Application09'

import { BrowserRouter, Route, Routes } from "react-router-dom";
//import GoToTop from './Component/GotoTop';


function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>
     
     {/* <GoToTop/> */}
     <Routes>
      <Route path='/new/' Component={Home}/> 
       <Route path='/new/aboutus' Component={AboutUs}/> 


      
{/* 
      

      <Route path='/new/product01' Component={Product01}></Route>
      <Route path='/new/product02' Component={Product02}></Route>
      <Route path='/new/product03' Component={Product03}></Route>
      <Route path='/new/product04' Component={Product04}></Route>
      <Route path='/new/product05' Component={Product05}></Route>
      <Route path='/new/product06' Component={Product06}></Route>

      <Route path='/new/application01' Component={Application01}></Route>
      <Route path='/new/application02' Component={Application02}></Route>
      <Route path='/new/application03' Component={Application03}></Route>
      <Route path='/new/application04' Component={Application04}></Route>
      <Route path='/new/application05' Component={Application05}></Route>
      <Route path='/new/application06' Component={Application06}></Route>
      <Route path='/new/application07' Component={Application07}></Route>
      <Route path='/new/application08' Component={Application08}></Route>
      <Route path='/new/application09' Component={Application09}></Route>

      <Route path='/new/contactus' Component={Contact}/>   */}
     </Routes>
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
