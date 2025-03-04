// src/components/TechIcons.jsx
import React from "react";
import htmlIcon from "../../../assets/LabIoT/html5.png";
import cssIcon from "../../../assets/LabIoT/css3-alt.png";
import jsIcon from "../../../assets/LabIoT/js.png";
import reactIcon from "../../../assets/LabIoT/react.png";
import githubIcon from "../../../assets/LabIoT/github.png";
import pythonIcon from "../../../assets/LabIoT/python.png";

function TechIcons() {
  return (
    <div style={{ display: "stretch", textAlign: "center" }}>
      <span
        className="dot"
        style={{ backgroundImage: `url(${htmlIcon})` }}
      ></span>
      <span
        className="dot"
        style={{ backgroundImage: `url(${cssIcon})` }}
      ></span>
      <span
        className="dot"
        style={{ backgroundImage: `url(${jsIcon})` }}
      ></span>
      <span
        className="dot"
        style={{ backgroundImage: `url(${reactIcon})` }}
      ></span>
      <span
        className="dot"
        style={{ backgroundImage: `url(${githubIcon})` }}
      ></span>
      <span
        className="dot"
        style={{ backgroundImage: `url(${pythonIcon})` }}
      ></span>
    </div>
  );
}

export default TechIcons;
