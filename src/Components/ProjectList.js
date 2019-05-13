import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectAPI from "../Projects/ProjectAPI";

function ProjectList() {
  return (
    <div>
      <div className="upper-panel">
        <h1>Projects</h1>
        <h2>Here be projects</h2>
      </div>
      <div className="project-grid">
        {ProjectAPI.all().map(p => (
          <ProjectGridItem key={p.id} icon={p.icon} url={p.url} name={p.name} />
        ))}
      </div>
    </div>
  );
}

const ProjectGridItem = props => (
  <div className="project-grid-item">
    <Link to={`/projects/${props.url}`}>
      <img
        className="project-icon"
        src={require(`../Images/${props.url}/${props.icon}.png`)}
      />
    </Link>
    <p className="preview-text">{props.name}</p>
  </div>
);

export default ProjectList;
