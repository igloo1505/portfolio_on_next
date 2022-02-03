import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "./projects";
import clsx from "clsx";

const ProjectsSection = ({ styles }) => {
	return (
		<div className={clsx(styles.projectSection, styles.section)}>
			<div style={{ width: "100%", display: "flex" }}>
				<div className={styles.subtitleText}>Projects</div>
			</div>
			<div className={styles.projectsOuterWrapper}>
				{projects.map((p, index) => (
					<SingleProject project={p} styles={styles} key={`project-${index}`} />
				))}
			</div>
		</div>
	);
};

export default ProjectsSection;
