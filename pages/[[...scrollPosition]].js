import React, { useState, useEffect } from "react";
import { shouldHideBodyOverflow } from "../util/utilityFunctions";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import { connect, useDispatch } from "react-redux";
import * as Types from "../state/Types";
import { useRouter } from "next/router";

const LandingPage = ({
	state: {
		navbar: { height: navbarHeight },
	},
}) => {
	const router = useRouter();

	useEffect(() => {
		if (router.query.scrollPosition) {
			console.log("scrollPosition: ", router.query.scrollPosition);
			let _q = router.query.scrollPosition[0];
			if (_q === "skills") {
				return document
					.getElementById("scroll-to-section-skills")
					.scrollIntoView({
						behavior: "smooth",
					});
			}
			if (_q === "portfolio") {
				return document
					.getElementById("scroll-to-section-portfolio")
					.scrollIntoView({
						behavior: "smooth",
					});
			}
		}
	}, [router.query]);

	useEffect(() => {
		shouldHideBodyOverflow(false);
	}, []);

	const [extraStyles, setExtraStyles] = useState({});

	const dispatch = useDispatch();
	const handleDimensions = () => {
		let _navHeight = document
			.getElementById("navbar-container-id")
			?.getBoundingClientRect()?.height;
		if (_navHeight) {
			setExtraStyles({
				marginTop: `${_navHeight}px`,
			});
		}
		dispatch({
			type: Types.UPDATE_NAV_HEIGHT,
			payload: {
				navbar: {
					height: _navHeight,
				},
				viewport: {
					width: window.innerWidth,
					height: window.innerHeight,
				},
			},
		});
	};
	useEffect(() => {
		if (typeof window !== "undefined") {
			handleDimensions();
			window.addEventListener("resize", () => {
				handleDimensions();
			});
		}
	}, []);

	return (
		<div className="App" style={extraStyles}>
			<HeroSection />
			<FeaturedSection />
			<SkillsSection />
			<PortfolioSection />
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(LandingPage);
