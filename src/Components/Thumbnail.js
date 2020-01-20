import React from "react";
import Popup from "reactjs-popup";
import ProjectItem from "./ProjectItem";

export default function Thumbnail(props) {
  return <div className="projects-item">{popup(props)}</div>;
}

function popup(props) {
  return (
    <Popup
      trigger={
        <div>
          <img
            className="projects-item-icon"
            src={require(`../Images/${props.path}/${props.icon}.png`)}
          />
          <div className="projects-item-title">{props.name}</div>
        </div>
      }
      modal
    >
      {close => (
        <div className="popup">
          <ProjectItem path={props.path} />
        </div>
      )}
    </Popup>
  );
}
