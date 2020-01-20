import React, { Component } from "react";
import GitHubIcon from "../Images/github-icon.png";
import ContactImg from "../Images/contact-placeholder-img.png";

export default class Contact extends Component {
  handleLink(destination) {
    window.location.assign(destination);
  }

  render() {
    const githubURL = "https://github.com/Damchou";

    return (
      <div className="contact-bar">
        <div
          className="contact-github"
          onClick={() => this.handleLink(githubURL)}
        >
          <img src={GitHubIcon} />
        </div>
        <div className="contact-name">Full Name</div>
        <div className="contact-email">
          <img src={ContactImg} />
        </div>
      </div>
    );
  }
}
