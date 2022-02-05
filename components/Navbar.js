import React from "react";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { gsap } from "gsap";
import NavbarNavigationSection from "./NavbarNavigationSection";
import ReactGA from "react-ga";
import Router from "next/router";
import { connect } from "react-redux";
import * as Types from "../state/Types";

//   TODO Change second link to blog link in socialHeader list
const Navbar = ({ props: { currentPath }, dispatch, state }) => {
	const handleBurgerClick = () => {
		console.log("Handle burger click here");
		dispatch({
			type: Types.TOGGLE_DRAWER,
		});
	};

	const handleSkillsClick = () => {
		if (Router.router.asPath === "/resume") {
			Router.push("/");
		}
		ReactGA.event({
			category: "Skills",
			action: "SkillsNavbarClick",
			value: "Skills",
			label: "Skills",
		});
		document.getElementById("scroll-to-section-skills").scrollIntoView({
			behavior: "smooth",
		});
	};

	const handleWorkClick = () => {
		ReactGA.event({
			category: "Work",
			action: "WorkNavbarClick",
			value: "Work",
			label: "Work",
		});
		if (Router.router.asPath === "/resume") {
			Router.push("/");
		}
		document.getElementById("scroll-to-section-featured").scrollIntoView({
			behavior: "smooth",
		});
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
