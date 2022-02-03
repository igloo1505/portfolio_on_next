import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faHtml5,
//     faCss3Alt,
//     faReact,
//     faJs,
//     faNodeJs,
//     faGit,
//     faNpm,
//     faGithub
//   } from "@fortawesome/free-brands-svg-icons";
import { skillsArray, AppColors } from "../util/UniversalData";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
	// const imageArray = [
	//     skillImageOne
	// ]
	return (
		<section
			id="skillsSection"
			className="skills"
			style={{ background: AppColors.skillsBodyColor }}
		>
			<div className="skills-container">
				<ul>
					{skillsArray.map((s) => (
						<SkillCard key={s.title} skill={s} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default SkillsSection;
