import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import classes from "../css/NewContactModal.module.scss";
import clsx from "clsx";
import * as Types from "../state/Types";
import { isMobile } from "react-device-detect";
import { formTransitionMobile } from "../animations/formTransitionMobile";
import TextareaAutosize from "react-textarea-autosize";

const NewContactModal = ({
	state: {
		contactModal: { isOpen },
	},
	dispatch,
}) => {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		phone: "",
		company: "",
		message: "",
	});
	const [formStep, setFormStep] = useState(1);
	const [rightButtonText, setRightButtonText] = useState("Next");

	useEffect(() => {
		if (isOpen) {
			formTransitionMobile({
				enter: true,
			});
		}
	}, [isOpen]);

	useEffect(() => {
		if (formStep === 2) {
			setTimeout(() => {
				setRightButtonText("Send");
			}, 1600);
		}
		if (formStep === 1) {
			setTimeout(() => {
				setRightButtonText("Next");
			}, 1000);
		}
	}, [formStep]);

	const handleBackdropClick = () => {
		formTransitionMobile({
			close: true,
			onComplete: () => {
				dispatch({
					type: Types.SET_CONTACT_MODAL_CLOSED,
				});
			},
		});
	};
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSend = (e) => {};
	const handleBack = (e) => {
		setFormStep(1);
		formTransitionMobile({
			back: true,
		});
	};
	const handleNext = (e) => {
		e.preventDefault();
		setFormStep(formStep + 1);
		formTransitionMobile({
			next: true,
		});
	};

	return (
		<div
			className={clsx(
				classes.backdrop,
				isOpen && classes.backdropIsOpen,
				"contact-modal-backdrop"
			)}
			onClick={handleBackdropClick}
		>
			<div
				className={clsx(
					classes.container,
					isOpen && classes.containerIsOpen,
					"contact-modal-container"
				)}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={classes.titleText}>Get in Touch</div>
				<div className={clsx(classes.outerInputContainer)}>
					<div className={classes.formTopRow}>
						<InputEm
							handleChange={handleChange}
							_name={"name"}
							helperText={"Name"}
							placeHolder="Name"
							step={1}
						/>
						<InputEm
							handleChange={handleChange}
							_name={"email"}
							helperText={"Email"}
							placeHolder="Email"
							step={1}
						/>
					</div>
					<div className={classes.formRow}>
						<InputEm
							handleChange={handleChange}
							_name={"company"}
							helperText={"Your Company (if applicable)"}
							placeHolder="Company"
							step={1}
						/>
						<InputEm
							handleChange={handleChange}
							_name={"phone"}
							helperText={"Phone Number (optional)"}
							placeHolder="Phone"
							step={1}
						/>
					</div>
					<div className={clsx(classes.textAreaContainer, "textAreaContainer")}>
						<TextareaAutosize
							minRows={5}
							className={clsx(
								classes.contactFormTextArea,
								"contactFormTextArea"
							)}
						/>
					</div>
				</div>
				<div
					className={clsx(
						classes.buttonContainer,
						classes[`buttonContainer-${formStep}`]
					)}
				>
					<button
						className={clsx(
							classes.button,
							classes[`button-${formStep}`],
							`button-${formStep}`,
							classes.backButton,
							"backButton"
						)}
						onClick={handleBack}
						id="contact-next-button"
					>
						<div className={classes.buttonText}>Back</div>
					</button>
					<button
						className={clsx(
							classes.button,
							classes[`button-${formStep}`],
							`button-${formStep}`,
							classes.nextButton,
							"nextButton"
						)}
						id="contact-next-button"
						onClick={isMobile ? handleNext : handleSend}
					>
						<div className={classes.buttonText}>{rightButtonText}</div>
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
	props: props,
});

export default connect(mapStateToProps)(NewContactModal);

const InputEm = ({ handleChange, _name, helperText, placeHolder, step }) => {
	return (
		<div
			className={clsx(
				classes.inputContainer,
				`inputContainer-${_name}`,
				`inputContainer-${step}`
			)}
			id={`inputContainer-${_name}`}
		>
			<input
				className={classes.input}
				type="text"
				placeholder={placeHolder}
				onChange={handleChange}
				name={_name}
			/>
			<div className={classes.helperText}>{helperText}</div>
		</div>
	);
};
