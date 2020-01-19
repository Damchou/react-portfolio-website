import React from "react";

export default function Thumbnail(props) {
  return (
    <div className="projects-item">
      <img
        className="projects-item-icon"
        src={require(`../Images/${props.url}/${props.icon}.png`)}
      />
      <div className="projects-item-title">{props.name}</div>
    </div>
  );
}
