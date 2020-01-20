import React from "react";
import ProjectAPI from "./ProjectAPI";
import Thumbnail from "./Thumbnail";

export default function ProjectGrid(props) {
  return (
    <div className="main-container">
      <div className="projects">
        {ProjectAPI.all().map(p => (
          <Thumbnail key={p.id} icon={p.icon} path={p.path} name={p.name} />
        ))}
      </div>
    </div>
  );
}
