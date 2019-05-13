import React, { Component } from "react";
import profileImg from "../Images/profile.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="upper-panel">
          <img className="profile-img" src={profileImg} alt="Profile picture" />
          <h1>First name</h1>
          <h2>Last name</h2>
        </div>
        <div className="lower-panel">
          <p>This is the bio. Here you can tell about yourself.</p>
        </div>
      </div>
    );
  }
}

export default Home;
