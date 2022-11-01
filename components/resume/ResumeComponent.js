import React, { useEffect } from "react";
import styles from "../../css/Resume.module.css";
import resume from "../../public/resumeImage.png";
import Image from "next/image";

const ResumeComponent = () => {
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		let em = document.getElementById("resumeImage");
		em.classList.add(styles.resumeFadeIn);
	}, []);

	return (
		<div className={styles.resumeOuterWrapper}>
			<Image
				src={resume}
				className={styles.resumeImage}
				alt="Resume"
				id="resumeImage"
				fill
			/>
			<a className={styles.downloadButton} href="/resume_main.pdf" download>
				Download Resume
			</a>
		</div>
	);
};

export default ResumeComponent;
