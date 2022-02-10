import React, { useEffect } from "react";
import { skillsArray, AppColors } from "../util/UniversalData";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", animateCardScroll);
		}
	}, []);
	return (
		<section
			id="scroll-to-section-skills"
			className="skills"
			style={{ background: AppColors.skillsBodyColor }}
		>
			<div className="skills-container">
				<ul>
					{skillsArray.map((s, i) => (
						<SkillCard key={s.title} skill={s} _id={`skill-scroll-card-${i}`} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default SkillsSection;

const animateCardScroll = () => {
	for (var i = 0; i < skillsArray.length; i++) {
		if (i !== 0) return;
		let card = document.getElementById(`skill-scroll-card-${i}`);
		let rect = card.getBoundingClientRect();
		if (!card) return;
		let L = 1;
		let E = 0.2;
		let N = 0.8;
		let enteredZero =
			(window.innerHeight - (rect.top + rect.height / 2)) / window.innerHeight;

		// let enteredZero =
		// 	(window.innerHeight - rect.top) / window.innerHeight + rect.height / 2;
		let centered =
			(window.innerHeight - card.getBoundingClientRect().top / 2) /
			Math.abs(card.offsetTop - window.innerHeight) /
			2;
		let dY = Math.pow(L + centered, 3) - Math.pow(centered, 3) / centered;
		card.style.boxShadow = `${12 * centered}px ${
			12 * centered
		}px 20px rgba(150, 170, 180, 0.5), -${12 * centered}px -${
			12 * centered
		}px 20px #e0e0e0`;

		// console.log(
		// 	"centered",
		// 	Math.cos(Math.abs(0.5 - enteredZero)) - 50 * Math.pow(centered, 2),
		// 	centered,
		// 	"enteredZero",
		// 	enteredZero
		// );
	}
};
