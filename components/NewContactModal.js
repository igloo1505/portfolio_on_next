import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import classes from "../css/NewContactModal.module.scss";
import clsx from "clsx";
import * as Types from "../state/Types";

const NewContactModal = ({
	state: {
		contactModal: { isOpen },
	},
	dispatch,
}) => {
	const handleBackdropClick = () => {
		dispatch({
			type: Types.SET_CONTACT_MODAL_CLOSED,
		});
	};
	return (
		<div
			className={clsx(classes.backdrop, isOpen && classes.backdropIsOpen)}
			onClick={handleBackdropClick}
		>
			<div
				className={clsx(classes.container, isOpen && classes.containerIsOpen)}
			>
				<div></div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(NewContactModal);
