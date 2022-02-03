import React from "react";

const SingleProject = ({ project, styles }) => {
	return (
		<div className={styles.singleProject}>
			<div className={styles.projectTitle}>{project.title}</div>
			<div className={styles.projectUrl}>
				<a href={`https://${project.url}`}>{project.url}</a>
			</div>
			<div className={styles.projectDescription}>{project.description}</div>
		</div>
	);
};

export default SingleProject;
