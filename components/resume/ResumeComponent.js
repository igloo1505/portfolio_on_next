import React from "react";
import styles from "../../css/Resume.module.css";
// import ContactSection from "./ContactSection";
// import AboutMeSection from "./AboutMeSection";
// import ProjectsSection from "./ProjectsSection";
// import SkillsSection from "./SkillsSection";
import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumeComponent = () => {
	const layout = defaultLayoutPlugin();
	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
			<div className={styles.resumeOuterWrapper}>
				<Viewer fileUrl="resume_main.pdf" plugins={[layout]} />
			</div>
		</Worker>
	);
};

export default ResumeComponent;
