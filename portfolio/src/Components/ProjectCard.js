import React from 'react';
import '../Styles/ProjectCard.css';

function ProjectCard({ project }) {
  const { title, image, description, github, website } = project;
  return (
    <div className="card">
      <div className="padd-element">
        <h3 className="title">{ title }</h3>
        <p className="description">{ description }</p>
      </div>
      <img className="project-image" src={ image } alt={ title } />
      <div className="view-link">
        <a className="a-card" href={ github }>Repository</a>
        <a className="a-card" href={ website }>View Live</a>
      </div>
    </div>
  )
}

export default ProjectCard;
