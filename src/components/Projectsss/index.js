import React from "react";
import "./style.css";

function Projects(props) {
  return (
    <div className="projects text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Projects;
