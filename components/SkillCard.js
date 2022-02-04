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
import {
	hoverAnimationEnter,
	hoverAnimationExit,
	hoverAnimationMove,
} from "../animations/hoverAnimation";

const SkillCard = ({ skill }) => {
	const handleMouseEnter = (e) => {
		if (typeof window !== "undefined") {
			hoverAnimationEnter(e);
		}
	};
	const handleMouseMove = (e) => {
		if (typeof window !== "undefined") {
			hoverAnimationMove(e);
		}
	};
	const handleMouseLeave = (e) => {
		if (typeof window !== "undefined") {
			hoverAnimationExit(e);
		}
	};
	return (
		<li
			key={skill.title}
			className="transition3"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
		>
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
