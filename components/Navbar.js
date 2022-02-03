import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../public/white_logo_transparent_background.png";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { gsap } from "gsap";
import NavbarNavigationSection from "./NavbarNavigationSection";
import ReactGA from "react-ga";
import Drawer from "./Drawer";
import { connect } from "react-redux";
import * as Types from "../state/Types";

//   TODO Change second link to blog link in socialHeader list
//   TODO Add hamburger menu for mobile
const Navbar = ({ props: { currentPath }, dispatch, state }) => {
	const handleBurgerClick = () => {
		console.log("Handle burger click here");
		dispatch({
			type: Types.TOGGLE_DRAWER,
		});
	};

	const handleSkillsClick = () => {
		ReactGA.event({
			category: "Skills",
			action: "SkillsNavbarClick",
			value: "Skills",
			label: "Skills",
		});
		gsap.to(window, {
			duration: 2,
			scrollTo: {
				y: "#skillsSection",
				offsetY: 50,
			},
		});
	};
	const handleWorkClick = () => {
		ReactGA.event({
			category: "Work",
			action: "WorkNavbarClick",
			value: "Work",
			label: "Work",
		});
		gsap.to(window, {
			duration: 2,
			scrollTo: {
				y: ".featured",
				offsetY: 50,
			},
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
