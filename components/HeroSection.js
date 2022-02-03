import React from "react";
import { heroText, promptText, AppColors } from "../util/UniversalData";
import HeroSideImage from "./HeroSideImage";

const HeroSection = () => {
	return (
		<div className="hero">
			<div className="content">
				<span className="heroText">{heroText()}</span>
				<div className="prompt" style={{ color: AppColors.promptColor }}>
					{promptText()}
				</div>
			</div>
			<HeroSideImage />
		</div>
	);
};

export default HeroSection;
