import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

import bgimg from './img/bg2.jpg';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
// import {AnimatePresence } from 'framer-motion';





function App() {
  return (
    <Router>
    <div style={{ backgroundImage: `url(${bgimg})` }} className="relative min-h-screen bg-cover bg-no-repeat bg-center">
      
        <Navbar />
       <AnimatedRoutes />
        
    </div>
    </Router>

  );
}

export default App;
