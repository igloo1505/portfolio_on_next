import clsx from "clsx";
import React from "react";
import { connect } from "react-redux";
import * as Types from "../state/Types";
import classes from "./Toast.module.scss";

const MessageSuccessToast = ({
	state: {
		toast: { submittedBy },
	},
}) => {
	return (
		<div
			className={clsx(
				classes.toastContainer,
				submittedBy && classes.toastContainerOpen
			)}
		>
			<div
				className={classes.toastText}
			>{`Thank you ${submittedBy}. I'll be in touch soon.`}</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(MessageSuccessToast);
