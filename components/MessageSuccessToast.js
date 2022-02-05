import React, { useEffect } from "react";
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
	useEffect(() => {
		if (submittedBy) {
			const onComplete = () =>
				dispatch({
					type: Types.SET_TOAST_SUBMITTED_BY,
					payload: null,
				});
			setTimeout(() => {
				animateClose({ onComplete });
				// animateClose({ onComplete });
			}, 3000);
		}
	}, [submittedBy, dispatch]);

	return (
		<div
			className={clsx(
				classes.toastContainer,
				submittedBy && classes.toastContainerOpen,
				"toastContainer"
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

const animateClose = ({ onComplete }) => {
	let tl = gsap.timeline({ onComplete: onComplete });
	tl.to(".toastContainer", {
		duration: 1,
		scaleY: 0,
		ease: "power3.inOut",
	});
	tl.to(
		".toastContainer",
		{
			x: -300,
			duration: 0.5,
			ease: "power2.inOut",
		},
		"+=0.5"
	);
};
