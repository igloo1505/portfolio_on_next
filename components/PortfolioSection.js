import React, { useState, useEffect } from "react";
import { portfolioArray, HeroImagePallet } from "../util/UniversalData";
import PortfolioPiece from "../components/PortfolioPiece";

const PortfolioSection = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", animatePortfolioScroll);
		}
	}, []);
	const [scrollData, setScrollData] = useState(null);

	const animatePortfolioScroll = (e) => {
		setScrollData(e);
	};
	return (
		<section className="portfolio" id="scroll-to-section-portfolio">
			{portfolioArray.map((p, index) => (
				<PortfolioPiece
					key={p.appName}
					p={p}
					scroll={scrollData}
					index={index}
				/>
			))}
		</section>
	);
};

export default PortfolioSection;
