import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import classes from "../css/NewContactModal.module.scss";
import clsx from "clsx";
import * as Types from "../state/Types";
import { formTransitionMobile } from "../animations/formTransitionMobile";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";

const NewContactModal = ({
	state: {
		contactModal: { isOpen },
		toast: { submittedBy },
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
	const [stepTwoFocusRef, setStepTwoFocusRef] = useState(null);
	const [formStep, setFormStep] = useState(1);
	const [stepTwoHeight, setStepTwoHeight] = useState({});
	const [rightButtonText, setRightButtonText] = useState("Next");
	const textAreaRef = useRef(null);
	const validate = (_data) => {
		// Handle this in the AM
		return true;
	};

	const handleSubmit = async (e) => {
		if (validate(formData)) {
			e.preventDefault();
			try {
				let res = await axios.post("/api/contact", formData, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				console.log("response: ", res);
				if (res.status === 200) {
					dispatch({
						type: Types.POST_CONTACT_SUCCESS,
						payload: res.data.name,
					});
				}
			} catch (error) {
				console.error("error: ", error);
			}
		}
	};

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
			}, 1800);
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

	useEffect(() => {
		if (submittedBy) {
			handleBackdropClick();
		}
	}, [submittedBy]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
			onComplete: () => {
				console.log("stepTwoFocusRef: ", stepTwoFocusRef);
				if (stepTwoFocusRef) {
					stepTwoFocusRef.focus();
				}
			},
		});
	};

	const observeHeightChange = (data) => {
		console.log("data: ", data);
		let emHeight = document
			.getElementById("textAreaContainer")
			.getBoundingClientRect().height;
		let containerHeight = document
			.getElementById("contact-outer-input-container")
			.getBoundingClientRect().height;
		if (emHeight > containerHeight - 32) {
			let _newHeight = emHeight + 32;
			setStepTwoHeight({
				height: `${_newHeight}px`,
			});
		}
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
				id="contact-modal-container"
			>
				<div className={classes.titleText}>Get in Touch</div>
				<div
					className={clsx(classes.outerInputContainer)}
					id="contact-outer-input-container"
					style={formStep === 2 ? stepTwoHeight : {}}
				>
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
							inputMode="tel"
						/>
					</div>
					<div
						className={clsx(classes.textAreaContainer, "textAreaContainer")}
						id="textAreaContainer"
					>
						<div className={classes.textAreaLabelText}>How Can I Help?</div>
						<TextareaAutosize
							minRows={5}
							// maxRows={20}
							id="textAreaResize"
							onHeightChange={observeHeightChange}
							className={clsx(
								classes.contactFormTextArea,
								"contactFormTextArea"
							)}
							// TODO: make sure this focuses on the textarea automatically on next click
							ref={(tag) => setStepTwoFocusRef(tag)}
							name="message"
							onChange={handleChange}
							// autoFocus
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
						tabIndex={formStep === 1 ? -1 : 0}
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
						onClick={formStep === 1 ? handleNext : handleSubmit}
					>
						<div className={classes.buttonText} id="right-button-text">
							{rightButtonText}
						</div>
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

const InputEm = ({
	handleChange,
	_name,
	helperText,
	placeHolder,
	step,
	...props
}) => {
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
				{...props}
			/>
			<div className={classes.helperText}>{helperText}</div>
		</div>
	);
};
