// src/components/Bio.js
import React from 'react';
import { motion } from 'framer-motion';

function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}  // Start hidden and slightly above
      animate={{ opacity: 1, y: 0 }}    // Fade in and move into position
      transition={{ duration: 0.5, delay: 0.2 }}  // Smooth animation
      className="bio"
    >
      <h2 className='Bio-Header'>About me</h2>
      <p className="about-me">
      I am a passionate developer experienced in Python,Java and I am speclized in developing full stack applications.
      </p>
    </motion.div>
  );
}

export default Bio;
