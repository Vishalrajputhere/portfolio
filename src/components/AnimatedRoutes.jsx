import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import {AnimatePresence } from 'framer-motion';


import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';
import Resume from '../components/Resume';
function AnimatedRoutes(){

    const location=useLocation();
  
    return(
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
  
      </AnimatePresence>
    );
  
  }
  export default AnimatedRoutes;