import React, { Fragment, forwardRef } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import { socialLinks } from "../util/UniversalData";
import { gitHubSvg, linkedInSvg } from "./svg";
import { GrNotes } from "react-icons/gr";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import clsx from "clsx";
import * as Types from "../state/Types";

const burgerBreakpoint = 800;

const NavbarNavigationSection = ({
	props: { currentPath, handleWorkClick, handleSkillsClick, handleBurgerClick },
	state: {
		drawer: { isOpen: burgerIsOpen },
		viewport: { width: deviceWidth },
	},
	dispatch,
}) => {
	const handleContactClick = () => {
		dispatch({
			type: Types.SET_CONTACT_MODAL_OPEN,
		});
	};

	if (currentPath === "landing") {
		return (
			<Fragment>
				<header id="navbarHeader">
					<div className="headerOverlayLanding">
						<i className="logoFont">
							Igl<span className="innerLogoText">ooDevelo</span>pment
						</i>
						<nav>
							<ul className="inlineNavUl">
								<li className="inlineNavLinks" onClick={handleWorkClick}>
									<a>My Work</a>
								</li>
								<li className="inlineNavLinks" onClick={handleSkillsClick}>
									<a>My Skills</a>
								</li>
								<li className="inlineNavLinks modal-trigger">
									<a className="modal-trigger" onClick={handleContactClick}>
										Contact Me
									</a>
								</li>
								{deviceWidth <= burgerBreakpoint && (
									<li
										className={clsx(
											"burgerButtonLi",
											burgerIsOpen && "burgerButtonLiOpen"
										)}
									>
										<Burger
											className={
												("burgerButton", burgerIsOpen && "burgerButtonOpen")
											}
											isOpen={burgerIsOpen}
											onClick={handleBurgerClick}
										/>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</header>
				<div className="socialHeader">
					<ul>
						<li style={{ display: socialLinks.github.display }}>
							<a
								target="_blank"
								rel="noreferrer"
								href={socialLinks.github.link}
							>
								{gitHubSvg("#000")}
							</a>
						</li>
						<li style={{ display: socialLinks.linkedIn.display }}>
							<a
								target="_blank"
								rel="noreferrer"
								href={socialLinks.linkedIn.link}
							>
								{linkedInSvg("#000", "auto", "auto")}
							</a>
						</li>
						<li style={{ display: socialLinks.linkedIn.display }}>
							<Link
								rel="noreferrer"
								href="/resume"
								style={{ height: "100%" }}
								passHref
							>
								<PassRefComponent />
							</Link>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	} else if (currentPath === "gallery") {
		return (
			<Fragment>
				<header>
					<div className="headerOverlayGallery">
						<div className="logoFont">
							Igl<span className="innerLogoText">ooDevelo</span>pment
						</div>
						<nav>
							<ul className="inlineNavUl">
								<li className="inlineNavLinks">
									<a href="/landing">Home Page</a>
								</li>
								<li className="inlineNavLinks modal-trigger">
									<a
										href="#contactModal"
										className="modal-trigger"
										onClick={handleContactClick}
									>
										Contact Me
									</a>
								</li>
								{deviceWidth <= burgerBreakpoint && (
									<li
										className={clsx(
											"burgerButtonLi",
											burgerIsOpen && "burgerButtonLiOpen"
										)}
									>
										<Burger
											className={
												("burgerButton", burgerIsOpen && "burgerButtonOpen")
											}
											isOpen={burgerIsOpen}
											onClick={handleBurgerClick}
										/>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</header>
				<div className="socialHeader">
					<ul>
						<li style={{ display: socialLinks.github.display }}>
							<a
								target="_blank"
								rel="noreferrer"
								href={socialLinks.github.link}
							>
								{gitHubSvg("#000")}
							</a>
						</li>
						<li style={{ display: socialLinks.linkedIn.display }}>
							<a
								target="_blank"
								rel="noreferrer"
								href={socialLinks.linkedIn.link}
							>
								{linkedInSvg("#000", "auto", "auto")}
							</a>
						</li>
						<li style={{ display: socialLinks.linkedIn.display }}>
							<Link
								rel="noreferrer"
								href="/resume"
								style={{ height: "100%" }}
								passHref
							>
								<PassRefComponent />
							</Link>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	}
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(NavbarNavigationSection);

// eslint-disable-next-line react/display-name
const PassRefComponent = forwardRef(() => {
	const handleResumeClick = () => {
		Router.push("/resume");
	};
	return (
		<GrNotes
			style={{
				width: "auto",
				height: "32px",
				marginTop: "3px",
				display: "block",
			}}
			className="resume-icon"
			onClick={handleResumeClick}
		/>
	);
});
