import React from "react";
import { SkillBars } from "react-skills";
import Bars from "./bars"

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

const knowledge = () => {
  return (
    <div className="knowledge" id="knowledge">
      <h1>knowledge</h1>
      <div className="container">
        <div className="line">
          <h2>Front-End</h2>
<Bars/>
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
          <div className="line">
            <h2>Skills</h2>
            <h4>• Communication</h4>  
            <h4>• Teamwork</h4> 
            <h4>• Computer programming & coding</h4> 
            <h4>• Problem-solving </h4> 
            <h4>• Attention to detail</h4>
            <h4>• Multitasking </h4>
          </div>
          <div className="line">
          <h2>Skills</h2>
          <h4>- Communication</h4>
          <h4>- Teamwork</h4>
          <h4>- Computer programming & coding</h4>
          <h4>- Problem-solving </h4>
          <h4>- Attention to detail</h4>
          <h4>- Multitasking </h4>
        </div>
        <div className="line">
          <h2>Language</h2>
          <h4>- Arabic</h4>
          <h4>- Language</h4>
        </div>
        </div>

    </div>
  );
};

export default knowledge;
