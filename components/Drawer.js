import React, { useState, useEffect } from "react";
// import { slide as Menu } from "react-burger-menu";
import { elastic as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import * as Types from "../state/Types";
import ReactGA from "react-ga";

// pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
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
	}) => {
		const [extraStyles, setExtraStyles] = useState({});

		useEffect(() => {
			setExtraStyles({
				padding: `${navHeight}px 0 1rem 0`,
			});
		}, [navHeight]);

		return (
			<div className="mobile-nav-section" style={extraStyles}>
				<a id="home" className="drawer-item" href="/">
					Home
				</a>
				<a id="about" className="drawer-item" href="/about">
					About
				</a>
				<a id="contact" className="drawer-item" href="/contact">
					Contact
				</a>
				<a className="drawer-item" href="">
					Settings
				</a>
			</div>
		);
	}
);
