import React from "react";

const SingleProject = ({ project }) => {
  return (
    <div className="singleProject">
      <div className="projectTitle">{project.title}</div>
      <div className="projectUrl">
        <a href={`https://${project.url}`}>{project.url}</a>
      </div>
      <div className="projectDescription">{project.description}</div>
    </div>
  );
};

export default SingleProject;
