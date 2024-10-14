import React, { useState, useEffect } from 'react';
import '../Styles/Content.css';
import ProjectCard from '../Components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
import axios from 'axios';  // Import Axios for making API requests
import Game2 from '../Images/Game2.png';
import IoT from '../Images/IoT.jpg';
import EuroRoute from '../Images/EuroRoute.PNG';
import PersonalWebsite from '../Images/PersonalWebsite.PNG';



// Define animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Static image, website, and source links (based on project IDs)
const projectDataExtras = {
  1: {
    image: EuroRoute,
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: 'https://github.com/Ben-Meadows/EuroRoute' }
    ]
  },
  2: {
    image: IoT,
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: 'https://git.cardiff.ac.uk/c21010898/smartdoorbellteam10' }
    ]
  },
  3: {
    image: Game2,
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: '#' }
    ]
  },
  4: {
    image: PersonalWebsite,
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: 'https://github.com/Ben-Meadows/Personal-Website' }
    ]
  }
};

const Content = () => {
  const [projects, setProjects] = useState([]);  // State to store project data

  // Fetch project data from the backend API when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/projects/');
        setProjects(response.data);  // Store fetched projects in state
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjects();  // Call the function to fetch projects
  }, []);  // Empty dependency array means this will run only once after the component mounts


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="content-container"
    >
      <motion.h2
        className="content-title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        My Portfolio
      </motion.h2>
      <motion.p
        className="content-subtitle"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I've worked on a variety of projects, from simple websites to complex web applications. 
        Here are a few of my favorites.
      </motion.p>

      <motion.div
        className="project-grid"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {projects.map((project, index) => {
          // Find the corresponding static data for the project
          const extras = projectDataExtras[project.id] || {};

          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.tags}
              image={extras.image}  // Static image from projectDataExtras
              links={extras.links}  // Static links from projectDataExtras
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Content;
