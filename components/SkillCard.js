import React, { useEffect } from "react";
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

const SkillCard = ({ skill, _id, index }) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				animateCardScroll({ cardId: _id, index: index })
			);
		}
	}, []);
	const handleMouseEnter = (e) => {
		if (typeof window !== "undefined") {
			// hoverAnimationEnter(e);
		}
	};
	const handleMouseMove = (e) => {
		if (typeof window !== "undefined") {
			// hoverAnimationMove(e);
		}
	};
	const handleMouseLeave = (e) => {
		if (typeof window !== "undefined") {
			// hoverAnimationExit(e);
		}
	};
	return (
		<li
			key={skill.title}
			className="transition3"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			id={_id}
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

const animateCardScroll = ({ cardId, index }) => {
	let spread = {
		0: 50,
		1: 40,
		2: 30,
		3: 20,
		4: 10,
	};
	const card = document.getElementById(cardId);
	if (!card) return;
	let rect = card.getBoundingClientRect();
	let _oTop = rect.top;
	let _h = rect.height;
	// console.log("_oTop: ", _oTop);
	let centeredLowx =
		(window.innerHeight - card.getBoundingClientRect().top / 2) /
		// (window.innerHeight - card.getBoundingClientRect().top / 2) /
		Math.abs(card.offsetTop - window.innerHeight) /
		2;
	console.log("card.offsetTop: ", card.offsetTop, _oTop);
	// console.log("card.offsetTop: ", card.getBoundingRect());
	// let centeredLow = {
	// 	_oTop,
	// 	height: window.innerHeight * 2,
	// 	_h,
	// 	value: (window.innerHeight - _oTop + _h) / 1000,
	// };
	let centeredLow = (window.innerHeight - _oTop + _h) / 1000;
	// (window.innerHeight - card.getBoundingClientRect().top / 2) /
	// Math.abs(_oTop - _h - window.innerHeight) /
	// 2;
	// window.innerHeight / Math.abs(_oTop - _h - window.innerHeight) / 2;

	card.style.opacity = `${centeredLow}`;

	let centered =
		(window.innerHeight - card.getBoundingClientRect().top) /
		Math.abs(card.offsetTop - window.innerHeight) /
		2;
	console.log("CenteredLow", centeredLow);
	if (centered > 1) {
		card.style.transform = `translateY(-${centered * spread[index]}px)`;
	}
	if (centered <= 1) {
		card.style.transform = `translateY(0px)`;
		Object.keys(spread).map((i) => {
			let _c = document.getElementById(`skill-scroll-card-${i}`);
			if (!_c) return;
			_c.style.transform = `translateY(0px)`;
		});
	}
};
