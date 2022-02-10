import React, { useEffect } from "react";
import { skillsArray, AppColors } from "../util/UniversalData";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
	return (
		<section
			id="scroll-to-section-skills"
			className="skills"
			style={{ background: AppColors.skillsBodyColor }}
		>
			<div className="skills-container">
				<ul>
					{skillsArray.map((s, i) => (
						<SkillCard
							key={s.title}
							skill={s}
							_id={`skill-scroll-card-${i}`}
							index={i}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default SkillsSection;
