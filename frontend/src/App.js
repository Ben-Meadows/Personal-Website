import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
import Header from './Components/Header';
import Bio from './Components/Bio';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Quote from './Components/Quote';
import Footer from './Components/Footer';
import Image from './Components/Image';
import Contact from './Pages/Contact';
import Content from './Pages/Content';
import Nav from './Components/Nav';
import './Styles/App.css';  // Ensure this line is present in App.js

// Define animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },  // Only animate fade and translation (no layout changes)
  visible: { opacity: 1, y: 0 }
};

const App = () => {
  return (
    <Router>
      <Nav />
      
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-container">
                
                {/* Animate the Bio section, keeping the CSS class for layout */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="top-section"  // Keep the original className for positioning
                >
                  <Bio />
                </motion.div>
                
                {/* Animate the Skills section, keeping the CSS class for layout */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="left-rectangle"  // Keep the original className for positioning
                >
                  <Skills />
                </motion.div>
                
                {/* Animate the Header section, keeping the CSS class for layout */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="central-square"  // Keep the original className for positioning
                >
                  <Header />
                </motion.div>
                
                {/* Animate the Education section, keeping the CSS class for layout */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="right-rectangle"  // Keep the original className for positioning
                >
                  <Education />
                </motion.div>
                
                {/* Animate the Quote section, keeping the CSS class for layout */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 1 }}
                  className="bottom-rectangle"  // Keep the original className for positioning
                >
                  <Quote />
                </motion.div>
                
                {/* Animate the Image section, keeping the CSS class for layout */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="image-container"  // Keep the original className for positioning
                >
                  <Image />
                </motion.div>
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
