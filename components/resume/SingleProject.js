import React from "react";
import ReactGA from "react-ga4";

const SingleProject = ({ project, styles }) => {
	const handleLiveView = () => {
		ReactGA.event({
			category: "Resume Piece",
			action: "Live View",
			label: project.gaName,
		});
	};
	return (
		<div className={styles.singleProject}>
			<div className={styles.projectTitle}>{project.title}</div>
			<div className={styles.projectUrl}>
				<a href={`https://${project.url}`} onClick={handleLiveView}>
					{project.url}
				</a>
			</div>
			<div className={styles.projectDescription}>{project.description}</div>
		</div>
	);
};

export default SingleProject;
