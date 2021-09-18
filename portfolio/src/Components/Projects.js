import React from 'react';
import allProjects from '../data/allProjects';
import ProjectCard from './ProjectCard';
import '../Styles/Projects.css';

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="project-text">Projects</h1>
      <div className="project-div">
        { allProjects.map((item) => <ProjectCard project={ item } />) }
      </div>
    </div>
  )
}

export default Projects;
