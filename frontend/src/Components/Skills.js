// src/components/Skills.js
import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJava, FaAws, FaDatabase, FaDocker } from 'react-icons/fa';
import '../Styles/Skills.css';



function Skills() {
  return (
    <section className="skills-section">
      <h2>Technologies I Work With</h2>
      <div className="skills-grid">
        <div className="text-center">
          <FaJsSquare size="3em" className="text-yellow-400" />
          <p>JavaScript</p>
        </div>
        <div className="text-center">
          <FaReact size="3em" className="text-blue-400" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FaNodeJs size="3em" className="text-green-500" />
          <p>Node.js</p>
        </div>
        <div className="text-center">
          <FaPython size="3em" className="text-yellow-400" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FaJava size="3em" className="text-red-700" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FaAws size="3em" className="text-orange-500" />
          <p>AWS</p>
        </div>
        <div className="text-center">
          <FaDatabase size="3em" className="text-blue-700" />
          <p>MySQL</p>
        </div>
        <div className="text-center">
          <FaDocker size="3em" className="text-blue-300" />
          <p>Docker</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
