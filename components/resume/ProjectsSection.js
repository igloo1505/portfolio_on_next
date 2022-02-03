import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "./projects";

const ProjectsSection = () => {
  return (
    <div className="projectSection section">
      <div style={{ width: "100%", display: "flex" }}>
        <div className="subtitleText">Projects</div>
      </div>
      <div className="projectsOuterWrapper">
        {projects.map((p) => (
          <SingleProject project={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
