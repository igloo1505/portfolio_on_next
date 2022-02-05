import React from "react";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { gsap } from "gsap";
import NavbarNavigationSection from "./NavbarNavigationSection";
import ReactGA from "react-ga";
import Router, { useRouter } from "next/router";
import { connect } from "react-redux";
import * as Types from "../state/Types";

//   TODO Change second link to blog link in socialHeader list

const scrollPaths = ["/featured", "/skills", "/portfolio", "/"];

const Navbar = ({ props: { currentPath }, dispatch, state }) => {
	const handleBurgerClick = () => {
		dispatch({
			type: Types.TOGGLE_DRAWER,
		});
	};
	const router = useRouter();

	const handleSkillsClick = () => {
		ReactGA.event({
			category: "Skills",
			action: "SkillsNavbarClick",
			value: "Skills",
			label: "Skills",
		});
		let home = scrollPaths.includes(router.asPath);

		if (!home) {
			router.push("/skills");
		}
		if (home) {
			router.push("/skills", undefined, { shallow: true });
		}
	};

	const handleWorkClick = () => {
		ReactGA.event({
			category: "Work",
			action: "WorkNavbarClick",
			value: "Work",
			label: "Work",
		});
		let home = scrollPaths.includes(router.asPath);

		if (!home) {
			router.push("/portfolio");
		}
		if (home) {
			router.push("/portfolio", undefined, { shallow: true });
		}

		// document.getElementById("scroll-to-section-portfolio").scrollIntoView({
		// 	behavior: "smooth",
		// });
	};

	return (
		<>
			<div className="nav-container" id="navbar-container-id">
				<NavbarNavigationSection
					currentPath={currentPath}
					handleWorkClick={handleWorkClick}
					handleSkillsClick={handleSkillsClick}
					handleBurgerClick={handleBurgerClick}
				/>
			</div>
		</>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(Navbar);
