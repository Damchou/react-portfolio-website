import React from "react";
import ProjectAPI from "./ProjectAPI";
import Thumbnail from "./Thumbnail";

export default function ProjectGrid() {
  return (
    <div className="main-container">
      <div className="projects">
        {ProjectAPI.all().map(p => (
          <Thumbnail key={p.id} icon={p.icon} url={p.url} name={p.name} />
        ))}
      </div>
    </div>
  );
}
