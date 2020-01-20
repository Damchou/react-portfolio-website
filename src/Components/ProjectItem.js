import React, { Component } from "react";
import ProjectAPI from "./ProjectAPI";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: "",
      project: null
    };
  }

  componentDidMount() {
    const project = ProjectAPI.get(this.props.path);
    this.setState({ project: project, activeImage: project.img1 });
  }

  handleLink(destination) {
    window.location.assign(destination);
  }

  imageClick(clickedImage) {
    this.setState({ activeImage: clickedImage });
  }

  render() {
    const project = this.state.project;

    if (!project) {
      return <div>No projects found, sorry!</div>;
    }

    return (
      <div className="project">
        <div className="project-title">
          <h2>{project.name}</h2>
        </div>
        <div className="project-active-img">
          <img
            src={require(`../Images/${project.path}/${this.state.activeImage}.png`)}
          />
        </div>
        <div className="project-sub-imgs">
          <div className="project-sub-imgs-nested">
            <img
              src={require(`../Images/${project.path}/${project.img1}.png`)}
              onClick={() => this.imageClick(project.img1)}
            />
            <img
              src={require(`../Images/${project.path}/${project.img2}.png`)}
              onClick={() => this.imageClick(project.img2)}
            />
            <img
              src={require(`../Images/${project.path}/${project.img3}.png`)}
              onClick={() => this.imageClick(project.img3)}
            />
            <img
              src={require(`../Images/${project.path}/${project.img4}.png`)}
              onClick={() => this.imageClick(project.img4)}
            />
          </div>
        </div>

        <div className="project-desc">
          {project.short} <br />
          <br /> {project.description}
        </div>
        <div className="project-links">
          <button
            disabled={!project.demo}
            onClick={() => this.handleLink(project.demo)}
          >
            Demo
          </button>
          <button
            disabled={!project.source}
            onClick={() => this.handleLink(project.source)}
          >
            Source
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
