import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div>
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route path="/projects/:url" component={ProjectItem} />
      </Switch>
    </div>
  );
}

export default Projects;
