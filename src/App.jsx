import React from 'react';
import Navbar from  './components/Navbar'
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import Admission from './components/Admission';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';




function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
  <div className="w-full min-h-screen bg-white text-black ">
  <Navbar/>
  <LandingPage/>
  <Marquee></Marquee>
  <About></About>
  <Projects></Projects>
  <Events></Events>
  <Admission></Admission>
  <Footer></Footer>
  
  
  </div>
    
    </>
  )
}

export default App
