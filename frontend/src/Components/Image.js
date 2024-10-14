import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import stars1 from '../Images/stars1.jpg';
import tech1 from '../Images/tech1.jpg';
import tech2 from '../Images/tech2.jpg';

const images = [stars1, tech1, tech2];

function Image() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="image-container2">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Slideshow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.8 }, ease: 'easeInOut' }} // Smooth fade-in and fade-out
          className="image"
        />
      </AnimatePresence>
    </div>
  );
}

export default Image;
