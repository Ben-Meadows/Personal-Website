import React from 'react';
import '../Styles/Content.css';
import ProjectCard from '../Components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';  // Importing motion from framer-motion

// Define animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const projects = [
  {
    title: 'Lingo - Duolingo Clone',
    description: 'A comprehensive language learning platform that uses the proven method of spaced repetition to enhance vocabulary retention. Users can choose from a wide variety of languages and track their progress over time. Lingo provides interactive exercises, quizzes, and gamified learning paths to motivate learners. Additionally, it incorporates speech recognition for practicing pronunciation and offers daily challenges to keep users engaged. The platform is designed for both beginners and advanced learners, providing tailored lessons based on user performance.',
    dates: '2023',
    tags: ['React.js', 'Node.js', 'JavaScript', 'CSS'],
    website: '#',
    source: '#',
    image: 'https://via.placeholder.com/500x300',
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: '#' }
    ]
  },
  {
    title: 'Case Cobra',
    description: 'An innovative e-commerce platform specifically designed for selling premium phone cases and accessories. Case Cobra leverages modern design principles to create an intuitive user interface, allowing users to easily browse through hundreds of products. It integrates secure payment gateways, a dynamic search system, and personalized recommendations based on user preferences. The platform is optimized for both desktop and mobile devices, ensuring a seamless shopping experience. Additionally, the admin panel allows store owners to manage orders, inventory, and customer reviews efficiently.',
    dates: '2023',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'GraphQL'],
    website: '#',
    source: '#',
    image: 'https://via.placeholder.com/500x300',
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: '#' }
    ]
  },
  {
    title: 'Ksham Innovation',
    description: 'A cutting-edge application developed for Ksham Innovation, a company specializing in hearing aids and auditory technologies.',
    dates: '2023',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'React.js'],
    website: '#',
    source: '#',
    image: 'https://via.placeholder.com/500x300',
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: '#' }
    ]
  },
  {
    title: 'Contact Manager',
    description: 'A powerful backend server designed for managing user contacts in a secure and efficient manner. This system allows users to store, edit, and delete contact information while ensuring data privacy and security through JWT (JSON Web Tokens) authentication. The server provides robust APIs for frontend clients to interact with the contacts database, featuring search, filtering, and sorting functionality. It also includes role-based access control, enabling admins to manage the permissions of regular users and enforce data integrity.',
    dates: '2023',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    website: '#',
    source: '#',
    image: 'https://via.placeholder.com/500x300',
    links: [
      { icon: <FontAwesomeIcon icon={faGlobe} />, type: 'Website', href: '#' },
      { icon: <FontAwesomeIcon icon={faGithub} />, type: 'Source', href: '#' }
    ]
  },
];

const Content = () => {
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.tags}
            image={project.image}
            links={project.links}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Content;
