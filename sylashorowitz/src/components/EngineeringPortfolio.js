/*

EngineeringPortfolio.js is a functional component that renders a list of ProjectCard components.
It takes in an array of project objects and maps over them to render a ProjectCard for each project.

*/

import React from 'react';
import ProjectCard from './ProjectCard';

// Example projects data
const projects = [
  {
    title: 'Pultrusion Machine',
    year: '2023',
    description: 'Thermoplastic pultrusion machine for testing...',
    skills: ['CAD', 'thermoplastics'],
    image: '/path/to/image.jpg'  // Update with actual path
  },
  // Add more projects here
];

function EngineeringPortfolio() {
  return (
    <div id="engineering">
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

export default EngineeringPortfolio;
