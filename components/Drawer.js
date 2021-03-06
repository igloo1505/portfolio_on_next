import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
// import { scaleRotate as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import * as Types from "../state/Types";
import ReactGA from "react-ga4";
import store from "../state/store";
import { FcSms, FcFactory, FcInspection } from "react-icons/fc";
import gsap from "gsap";
import { Router, useRouter } from "next/router";

// pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
const scrollPaths = ["/featured", "/skills", "/portfolio", "/"];

const handleContactClick = () => {
	ReactGA.event({
		category: "Contact",
		action: "Modal Opened",
		label: "Contact Modal Opened",
	});
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
	const router = useRouter();

	const handleWorkClick = () => {
		store.dispatch({
			type: Types.SET_DRAWER_CLOSED,
		});
		ReactGA.event({
			category: "Navigation",
			action: "My Work Click",
			label: "My Work Click",
		});
		let home = scrollPaths.includes(router.asPath);

		if (!home) {
			router.push("/portfolio");
		}
		if (home) {
			router.push("/portfolio", undefined, { shallow: true });
		}
	};

	const handleSkillsClick = () => {
		store.dispatch({
			type: Types.SET_DRAWER_CLOSED,
		});
		let home = scrollPaths.includes(router.asPath);

		if (!home) {
			router.push("/skills");
		}
		if (home) {
			router.push("/skills", undefined, { shallow: true });
		}
		ReactGA.event({
			category: "Navigation",
			action: "Skills Click",
			label: "Skills Click",
		});
	};

	const handleOpen = () => {
		//
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
			customBurgerIcon={false}
		>
			<MobileNavSection
				handleWorkClick={handleWorkClick}
				handleSkillsClick={handleSkillsClick}
			/>
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
		props: { handleWorkClick, handleSkillsClick },
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
					<a className="drawer-item" onClick={handleWorkClick}>
						My Work
					</a>
				</div>
				<div className="drawer-item-divider" />
				<div className="drawer-item-container">
					<FcInspection className="drawer-color-icon" />
					<a className="drawer-item" onClick={handleSkillsClick}>
						My Skills
					</a>
				</div>
				<div className="drawer-item-divider" />
				<div className="drawer-item-container">
					<FcSms className="drawer-color-icon" />
					<a className="modal-trigger drawer-item" onClick={handleContactClick}>
						Contact Me
					</a>
				</div>
				<div className="drawer-item-divider" />
			</div>
		);
	}
);
