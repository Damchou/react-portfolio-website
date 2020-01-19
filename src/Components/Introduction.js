import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="introduction">
          <h3>Oh hey, I'm</h3>
          <h1 className="introduction-firstname">FIRST NAME</h1>
          <h1 className="introduction-lastname">LAST NAME</h1>
          <h2>and welcome to my portfolio! Don't mind my generic name.</h2>
        </div>
      </div>
    );
  }
}
