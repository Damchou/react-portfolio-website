import React, { Component } from "react";
import profileImg from "../Images/profile.jpg";

class Home extends Component {
  render() {
    return (
      <div className="background-img-about">
        <div className="grid-container">
          <div className="grid-your-name">
            <h1>First name</h1>
            <h2>Last name</h2>
          </div>
          <div className="grid-profile-img">
            <img
              className="profile-img"
              src={profileImg}
              alt="Profile picture"
            />
          </div>
          <div className="grid-bio">
            <p>
              This is the bio. Here you can tell about yourself. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Phasellus venenatis
              mauris diam, sit amet luctus dolor viverra quis. Vestibulum ut
              enim vitae dui consequat facilisis. Nam quis justo hendrerit,
              suscipit neque vel, placerat ipsum.
            </p>
            <p>
              Aenean arcu justo, suscipit ac volutpat id, consequat quis turpis.
              Praesent ut mi enim. Duis id leo et mauris ultricies scelerisque
              et quis orci. Donec porttitor vestibulum sapien, vel condimentum
              eros malesuada eu. Curabitur vestibulum nunc quis condimentum
              porta. In tristique pretium dolor ac pharetra. Quisque nisi orci,
              lobortis eu tortor eget, aliquam placerat sapien. Sed auctor vel
              nibh vitae condimentum. Aliquam ac rutrum lectus, vitae dictum
              est. Quisque sit amet augue nisi. Duis eu tellus sit amet ante
              rhoncus fermentum eget ac sapien. Proin sem eros, venenatis at
              blandit vel, gravida in felis. Etiam tempor fringilla viverra.
              Etiam eget ante venenatis, sodales libero ac, pharetra quam.
              Vivamus et pellentesque augue, in facilisis ipsum.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
