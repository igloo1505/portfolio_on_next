import React from "react";

import { skillsArray, AppColors } from "../util/UniversalData";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
	// const imageArray = [
	//     skillImageOne
	// ]
	return (
		<section
			id="scroll-to-section-skills"
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
