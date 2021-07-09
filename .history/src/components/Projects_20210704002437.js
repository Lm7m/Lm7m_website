import React, { Component } from "react";
import Card from "./Card";

class Projects extends Component {
  render() {
    return (
      <div className="project" id="projects">
        <h1>Projects</h1>
        <li className="wrapper">
          <Card
            title="Split"
            description="Split and track your expenses in your phone"
            id="split"
            link="https://github.com/Lm7m/new_split"
            button="true"
          ></Card>
          <Card
            title="LM7M"
            description="My personal Website"
            id="lm7m"
            link="https://github.com/Lm7m/lm7m_website"
            button="true"
          ></Card>
          <Card
            title="Broccoli"
            description="in progess.."
            id="broccoli"
            button="false"
          ></Card>
        </li>
      </div>
    );
  }
}
export default Projects;
