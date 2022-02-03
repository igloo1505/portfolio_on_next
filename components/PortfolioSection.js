import React from "react";
import { portfolioArray, HeroImagePallet } from "../util/UniversalData";
import PortfolioPiece from "../components/PortfolioPiece";

const PortfolioSection = () => {
	return (
		<section className="portfolio" id="scroll-to-section-portfolio">
			{portfolioArray.map((p) => (
				<PortfolioPiece key={p.appName} p={p} />
			))}
		</section>
	);
};

export default PortfolioSection;
