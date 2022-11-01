import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as Types from "../state/Types";
import classes from "./Toast.module.scss";
import gsap from "gsap";

const MessageSuccessToast = ({
	state: {
		toast: { submittedBy },
	},
}) => {
	const dispatch = useDispatch();
	const [shouldDisplay, setShouldDisplay] = useState(false);
	useEffect(() => {
		if (submittedBy) {
			setShouldDisplay(true);
			const onComplete = () =>
				dispatch({
					type: Types.SET_TOAST_SUBMITTED_BY,
					payload: null,
				});
			setTimeout(() => {
				animateClose({ onComplete });
			}, 4500);
		}
	}, [submittedBy, dispatch]);

	return (
		<div
			className={clsx(
				classes.toastContainer,
				shouldDisplay && classes.toastContainerOpen,
				"toastContainer"
			)}
		>
			{shouldDisplay && (
				<div
					className={classes.toastText}
				>{`Thank you ${submittedBy}. I'll be in touch soon.`}</div>
			)}
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(MessageSuccessToast);

const animateClose = ({ onComplete }) => {
	let tl = gsap.timeline({ onComplete: onComplete });
	let w = window.innerWidth;
	tl.to(".toastContainer", {
		duration: 1,
		x: -w,
		scale: 0.5,
		opacity: 0,
		ease: "power4.inOut",
	});
};
