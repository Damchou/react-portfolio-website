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
    const project = ProjectAPI.get(this.props.match.params.url);
    this.setState({ project: project, activeImage: project.img1 });
  }

  handleLink(destination) {
    window.location.replace(destination);
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
      <div className="background-img-project">
        <div className="grid-container">
          <h1 className="grid-title-project">{project.name}</h1>
          <div>
            <img
              className="project-active-img"
              src={require(`../Images/${project.url}/${
                this.state.activeImage
              }.png`)}
            />
            <p className="project-about">{project.about}</p>
            <p className="project-description">{project.description}</p>
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

          <div className="project-sub-img-grid">
            <img
              className="project-sub-img"
              src={require(`../Images/${project.url}/${project.img1}.png`)}
              onClick={() => this.imageClick(project.img1)}
            />
            <img
              className="project-sub-img"
              src={require(`../Images/${project.url}/${project.img2}.png`)}
              onClick={() => this.imageClick(project.img2)}
            />
            <img
              className="project-sub-img"
              src={require(`../Images/${project.url}/${project.img3}.png`)}
              onClick={() => this.imageClick(project.img3)}
            />
            <img
              className="project-sub-img"
              src={require(`../Images/${project.url}/${project.img4}.png`)}
              onClick={() => this.imageClick(project.img4)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
