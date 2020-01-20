import React, { Component } from "react";
import Popup from "reactjs-popup";
import ProjectItem from "./ProjectItem";

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0
    };
  }

  mouseEnter = () => {
    this.setState({ opacity: 1 });
  };

  mouseLeave = () => {
    this.setState({ opacity: 0 });
  };

  hover() {
    return (
      <div
        className="projects-item-title"
        style={{ opacity: this.state.opacity }}
      >
        {this.props.name}
      </div>
    );
  }

  popup(props) {
    return (
      <Popup
        trigger={
          <div>
            <img
              className="projects-item-icon"
              src={require(`../Images/${this.props.path}/${this.props.icon}.png`)}
            />
            {this.hover()}
          </div>
        }
        modal
      >
        {close => (
          <div className="popup">
            <ProjectItem path={this.props.path} />
          </div>
        )}
      </Popup>
    );
  }

  render() {
    return (
      <div
        className="projects-item"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.popup(this.props)}
      </div>
    );
  }
}
