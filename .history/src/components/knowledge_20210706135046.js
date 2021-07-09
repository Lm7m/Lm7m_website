import React from "react";
import { SkillBars } from "react-skills";

const skillsDataFW = [

];
const skillsDataBE = [
  {
    name: "C++",
    level: 85,
    color: "#3d3d3d",
  },
  {
    name: "Pyhon",
    level: 57,
    color: "#3d3d3d",
  },
  {
    name: "Java",
    level: 57,
    color: "#3d3d3d",
  },
  {
    name: "Dart",
    level: 78,
    color: "#3d3d3d",
  },
  {
    name: "Java Script",
    level: 60,
    color: "#3d3d3d",
  },
];
const skillsDataFE = [
  {
    name: "React JS",
    level: 60,
    color: "#3d3d3d",
  },
  {
    name: "Flutter",
    level: 87,
    color: "#3d3d3d",
  },
  {
    name: "CSS + HTML",
    level: 80,
    color: "#3d3d3d",
  },
  {
    name: "Adobe XD",
    level: 70,
    color: "#3d3d3d",
  },
];

const knowledge = () => {
  return (
    <div className="knowledge" id="knowledge">
      <h1>knowledge</h1>
      <div className="container">
        <div className="line">
          <h2>FrameWorks</h2>
          <SkillBars className="bar" skills={skillsDataFW} />
        </div>
        <div className="line">
          <h2>Front-End</h2>
          <SkillBars className="bar" skills={skillsDataFE} />
        </div>
        <div className="line">
          <h2>Back-End</h2>
          <SkillBars className="bar" skills={skillsDataBE} />
        </div>
      </div>
    </div>
  );
};

export default knowledge;
