import React from 'react';
import allProjects from '../data/allProjects';
import ProjectCard from './ProjectCard';
import '../Styles/Projects.css';

function Projects() {
  return (
    <div id="products" className="projects-section">
      <h1 className="project-text">Projects</h1>
      <div className="project-div">
        { allProjects.map((item, i) => <ProjectCard key={ i } project={ item } />) }
      </div>
    </div>
  )
}

export default Projects;
