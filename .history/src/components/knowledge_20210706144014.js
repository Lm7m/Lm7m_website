import React from "react";
import { SkillBars } from "react-skills";

const skillsDataDB = [
  {
    name: "MySQL",
    level: 65,
    color: "#3d3d3d",
  },
  {
    name: "Firebase",
    level: 80,
    color: "#3d3d3d",
  },
];
const skillsDataBE = [
  {
    name: "C++",
    level: 85,
    color: "#3d3d3d",
  },
  {
    name: "Pyhon",
    level: 60,
    color: "#3d3d3d",
  },
  {
    name: "Java",
    level: 55,
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

const skillsDataOt = [
  {
    name: "Packet Tracer",
    level: 75,
    color: "#3d3d3d",
  },
  {
    name: "SAP",
    level: 55,
    color: "#3d3d3d",
  },
];

const skillsDataSk = [
  {
    name: "Packet Tracer",
    level: 75,
    color: "#ffc117",
  },
  {
    name: "SAP",
    level: 55,
    color: "#ffc117",
  },
];
const knowledge = () => {
  return (
    <div className="knowledge" id="knowledge">
      <h1>knowledge</h1>
      <div className="container">
        <div className="line">
          <h2>Front-End</h2>
          <SkillBars className="bar" skills={skillsDataFE} />
        </div>
        <div className="line">
          <h2>Back-End</h2>
          <SkillBars className="bar" skills={skillsDataBE} />
        </div>
        <div className="line">
          <h2>Database</h2>
          <SkillBars className="bar" skills={skillsDataDB} />
        </div>
        <div className="line">
          <h2>Others</h2>
          <SkillBars className="bar" skills={skillsDataOt} />
        </div>
      </div>
      <div className= "skills">
      <div className="container">
        <div className="line">
          <h2>Others</h2>
          <SkillBars className="bar" skills={skillsDataSk} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default knowledge;
