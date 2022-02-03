import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
// import { scaleRotate as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import * as Types from "../state/Types";
import ReactGA from "react-ga";
import store from "../state/store";
import { FcSms, FcFactory, FcInspection } from "react-icons/fc";
import gsap from "gsap";

// pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }

const handleWorkClick = () => {
	store.dispatch({
		type: Types.SET_DRAWER_CLOSED,
	});
	ReactGA.event({
		category: "Work",
		action: "WorkNavbarClick",
		value: "Work",
		label: "Work",
	});
	gsap.to(window, {
		duration: 1.3,
		scrollTo: {
			y: "#scroll-to-section-portfolio",
			offsetY: 50,
		},
	});
};

const handleSkillsClick = () => {
	store.dispatch({
		type: Types.SET_DRAWER_CLOSED,
	});
	ReactGA.event({
		category: "Skills",
		action: "SkillsNavbarClick",
		value: "Skills",
		label: "Skills",
	});
	gsap.to(window, {
		duration: 1,
		scrollTo: {
			y: "#skillsSection",
			offsetY: 50,
		},
	});
};

const handleContactClick = () => {
	store.dispatch({
		type: Types.SET_CONTACT_MODAL_OPEN,
	});
};
const Drawer = ({
	state: {
		drawer: { isOpen },
	},
	dispatch,
}) => {
	const handleOpen = () => {
		console.log("Drawer open");
	};

	const isMenuOpen = (_state) => {
		if (_state.isOpen) {
			dispatch({
				type: Types.SET_DRAWER_OPEN,
			});
		}
		if (!_state.isOpen) {
			dispatch({
				type: Types.SET_DRAWER_CLOSED,
			});
		}
	};
	return (
		<Menu
			isOpen={isOpen}
			width={200}
			onOpen={handleOpen}
			className="drawer-container"
			right
			outerContainerId={"drawer-outer-container-id"}
			pageWrapId={"drawer-page-wrapper"}
			onStateChange={isMenuOpen}
		>
			<MobileNavSection />
		</Menu>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(Drawer);

const MobileNavSection = connect(mapStateToProps)(
	({
		state: {
			navbar: { height: navHeight },
		},
		dispatch,
	}) => {
		const [extraStyles, setExtraStyles] = useState({});

		useEffect(() => {
			setExtraStyles({
				...extraStyles,
				navSection: {
					padding: `${navHeight}px 0 1rem 0`,
				},
				divider: {
					top: `${navHeight}`,
				},
			});
		}, [navHeight]);

		return (
			<div className="mobile-nav-section" style={extraStyles.navSection}>
				<div
				// className="absolute-positioned-divider"
				// style={extraStyles.divider}
				/>

				<div className="drawer-item-divider" />
				<div className="drawer-item-container">
					<FcFactory className="drawer-color-icon" />
					<a className="drawer-item" href="#!" onClick={handleWorkClick}>
						My Work
					</a>
				</div>
				<div className="drawer-item-divider" />
				<div className="drawer-item-container">
					<FcInspection className="drawer-color-icon" />
					<a className="drawer-item" href="#!" onClick={handleSkillsClick}>
						My Skills
					</a>
				</div>
				<div className="drawer-item-divider" />
				<div className="drawer-item-container">
					<FcSms className="drawer-color-icon" />
					<a
						href="#contactModal"
						className="modal-trigger drawer-item"
						onClick={handleContactClick}
					>
						Contact Me
					</a>
				</div>
				<div className="drawer-item-divider" />
			</div>
		);
	}
);
