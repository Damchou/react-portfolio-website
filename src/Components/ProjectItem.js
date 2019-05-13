import React, { Component } from "react";
import ProjectAPI from "../Projects/ProjectAPI";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: "",
      project: null
    };
  }

  componentDidMount() {
    this.setState({ project: ProjectAPI.get(this.props.match.params.url) });
    const project = ProjectAPI.get(this.props.match.params.url);
  }

  render() {
    const project = this.state.project;
    if (!project) {
      return <div>No projects found!</div>;
    }

    return (
      <div>
        <h1 className="upper-panel">{project.name}</h1>
        <div>
          <img
            className="project-active-img"
            src={require(`../Images/${project.url}/${project.img1}.png`)}
          />
          <p>{project.about}</p>
          <p>{project.description}</p>
          <button>Demo</button>
          <button>Source</button>
        </div>

        <h2>{project.info}</h2>
        <div className="project-sub-img">
          <img src={require(`../Images/${project.url}/${project.img1}.png`)} />
          <img src={require(`../Images/${project.url}/${project.img2}.png`)} />
          <img src={require(`../Images/${project.url}/${project.img3}.png`)} />
          <img src={require(`../Images/${project.url}/${project.img4}.png`)} />
        </div>
      </div>
    );
  }
}

export default ProjectItem;
