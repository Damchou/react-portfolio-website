import React from "react";
import { Link } from "react-router-dom";
import ProjectAPI from "./ProjectAPI";

function ProjectList() {
  return (
    <div className="background-img-projectsgrid">
      <div className="grid-container">
        <div className="grid-title-name">
          <h1>Projects</h1>
          <h2>Here be projects</h2>
        </div>
        <div className="project-grid-list">
          {ProjectAPI.all().map(p => (
            <ProjectGridItem
              key={p.id}
              icon={p.icon}
              url={p.url}
              name={p.name}
            />
          ))}
        </div>
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
      <p>{props.name}</p>
    </Link>
  </div>
);

export default ProjectList;
