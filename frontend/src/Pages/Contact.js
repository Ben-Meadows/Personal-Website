import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For email icon

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },  // Only animate fade and translation (no layout changes)
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}  // Adjust timing as needed
      className="contact-container"  // Keep the original className for layout
    >
      <div className="contact-links">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}  // Delay slightly for staggered animation
          className="contact-item email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <p className="email-text">Benjaminmeadows360@hotmail.co.uk</p>
        </motion.div>

        <motion.a
          href="https://github.com/Ben-Meadows?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}  // Slightly delayed
          className="contact-item github"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/ben-meadows-640469287/?originalSubdomain=uk"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}  // Slightly delayed
          className="contact-item linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </motion.a>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 1 }}  // Slightly delayed for form appearance
        className="contact-form-container"
      >
        <h3>Contact me</h3>
        <p>You can also get in touch with me through this form below.</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
