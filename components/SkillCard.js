import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import TechIcons from "./TechIcons";
import {
	codeSymbolSvg,
	swiftSvg,
	oAuthSvg,
	jwtSvg,
	googleAnalyticsSvg,
} from "./svg";

const SkillCard = ({ skill }) => {
	return (
		<li key={skill.title} className="transition3">
			<div className={`icon-container ${skill.classIndex}`}>
				{skill.type === "MobileDevelopment" && swiftSvg()}
				{skill.type === "FrontendDesign" && <TechIcons />}
				{skill.type === "BusinessTechnologies" && googleAnalyticsSvg(80, 80)}
				{skill.type === "secureBackend" && jwtSvg("auto", 80)}
			</div>
			<p className="skill-title">{skill.title}</p>
			<p className="featured-desc skill-desc">{skill.desc}</p>
		</li>
	);
};

export default SkillCard;
