import React from "react";
import styles from "../../css/Resume.module.css";
import resume from "../../public/resumeImage.png";
import Image from "next/image";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Build bug on Vercel...
// const ResumeComponent = () => {
// 	const layout = defaultLayoutPlugin();
// 	return (
// 		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
// 			<div className={styles.resumeOuterWrapper}>
// 				<Viewer fileUrl="resume_main.pdf" plugins={[layout]} />
// 			</div>
// 		</Worker>
// 	);
// };

const ResumeComponent = () => {
	return (
		<div className={styles.resumeOuterWrapper}>
			<Image src={resume} className={styles.resumeImage} alt="Resume" fill />
			<a className={styles.downloadButton} href="/resume_main.pdf" download>
				Download Resume
			</a>
		</div>
	);
};

export default ResumeComponent;
