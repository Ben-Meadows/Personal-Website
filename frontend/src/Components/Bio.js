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
      <h2>Who am I?</h2>
      <p className="text-lg">
        Hey! 
      </p>
    </motion.div>
  );
}

export default Bio;
