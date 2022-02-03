import React from "react";
import ContactSection from "./ContactSection";
import styles from "../../css/Resume.module.css";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const ResumeComponent = () => {
	return (
		<div className={styles.resumeOuterWrapper}>
			<div className={styles.titleText}>Resume</div>
			<ContactSection styles={styles} />
			<AboutMeSection styles={styles} />
			<ProjectsSection styles={styles} />
			<SkillsSection styles={styles} />
		</div>
	);
};

export default ResumeComponent;
