/*

ProjectCard.js is a functional component that renders a card for a project.
It takes in props for the project title, year, description, skills, and image.
The component returns a div with an image, title, year, description, and skills.

*/

import React from 'react';

function ProjectCard({ title, year, description, skills, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>{year}</span>
        <p>{description}</p>
        <p><strong>Skills:</strong> {skills.join(', ')}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
