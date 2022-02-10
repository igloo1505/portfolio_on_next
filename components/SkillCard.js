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

const SkillCard = ({ skill, _id, index }) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				animateCardScroll({ cardId: _id, index: index })
			);
			window.addEventListener("resize", () =>
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
		0: 100,
		1: 80,
		2: 60,
		3: 40,
		4: 20,
	};
	const card = document.getElementById(cardId);
	let isMobile = window.innerWidth <= 1150;
	if (!card) return;
	let rect = card.getBoundingClientRect();
	let _oTop = rect.top;
	let _h = rect.height;
	let centeredLow = (window.innerHeight - _oTop + _h) / 1000;
	card.style.opacity = `${centeredLow}`;

	let centered =
		(window.innerHeight - card.getBoundingClientRect().top) /
		Math.abs(card.offsetTop - window.innerHeight) /
		2;
	if (centeredLow > 0 && centeredLow <= 1 && window.innerWidth <= 800) {
		return (card.style.transform =
			parseInt(index / 2) === index / 2
				? `translateX(-${(1 - centeredLow) * 70}vw)`
				: `translateX(${(1 - centeredLow) * 70}vw)`);
	}

	if (centeredLow > 1 && isMobile) {
		card.style.transform = `translateX(0px)`;
	}
	if (centeredLow <= 1 && isMobile) {
		return (card.style.transform =
			parseInt(index / 2) === index / 2 ? `translateX(0)` : `translateX(0)`);
	}
	if (centered > 1 && !isMobile) {
		card.style.transform = `translateY(-${centered * spread[index]}px)`;
	}
	if (centered <= 1 && !isMobile) {
		card.style.transform = `translateY(0px)`;
		Object.keys(spread).map((i) => {
			let _c = document.getElementById(`skill-scroll-card-${i}`);
			if (!_c) return;
			_c.style.transform = `translateY(0px)`;
		});
	}
};
