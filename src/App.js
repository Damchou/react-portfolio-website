import React, { Component } from "react";
import Introduction from "./Components/Introduction";
import ProjectGrid from "./Components/ProjectGrid";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <ProjectGrid />
        <Contact />
      </div>
    );
  }
}

export default App;
