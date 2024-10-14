// src/components/Education.js
import React from 'react';

function Education() {
  return (
    <div className="quote-section">
      <div className="quote-header">Work Experience</div>

      {/* Seccl Job Experience */}
      <div className="quote-content">
        <h3>Junior Operational Analyst, Seccl</h3>
        <p>
          <em>May 2024 – Sep 2024</em>
        </p>
        <ul>
          <li>Managed regulatory compliance and transaction oversight, ensuring tax wrapper transfers adhered to HMRC laws.</li>
          <li>Developed custom Python and MongoDB tools that streamlined internal workflows, reducing manual processes by 50%.</li>
          <li>Collaborated with software engineers to enhance systems, contributing operational insights for system improvements.</li>
        </ul>
      </div>

      {/* M&S Job Experience */}
      <div className="quote-content">
        <h3>Customer Assistant, M&S</h3>
        <p>
          <em>Sep 2023 – May 2024</em>
        </p>
        <ul>
          <li>Provided excellent customer service by assisting customers with queries, purchases, and returns.</li>
          <li>Managed stock levels on the shop floor and ensured products were properly displayed.</li>
          <li>Handled transactions accurately and efficiently, maintaining a strong focus on customer satisfaction.</li>
          <li>Worked as part of a team to meet sales targets and contribute to a positive shopping experience.</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="quote-header">Education</div>
      <div className="quote-content">
        <h3>Cardiff University</h3>
        <p>
          <em>BSc Computer Science, 2020 – 2023</em>
        </p>
        <ul>
          <li>Achieved a high 2:1, with key modules in AI, machine learning, database systems, and object-oriented programming.</li>
          <li>Developed a student-centric travel planning web application as part of a final year project, earning a first-class grade.</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
