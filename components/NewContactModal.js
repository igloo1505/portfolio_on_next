import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import classes from "../css/NewContactModal.module.scss";
import clsx from "clsx";
import * as Types from "../state/Types";
import { formTransitionMobile } from "../animations/formTransitionMobile";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import ReactGA from "react-ga4";

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
	const [formDataValidation, setFormDataValidation] = useState({
		email: null,
		name: null,
		phone: null,
		company: null,
		message: null,
	});

	const [stepTwoFocusRef, setStepTwoFocusRef] = useState(null);
	const [formStep, setFormStep] = useState(1);
	const [stepTwoHeight, setStepTwoHeight] = useState({});
	const [rightButtonText, setRightButtonText] = useState("Next");
	const textAreaRef = useRef(null);
	const validate = (_data) => {
		// if(formData.email.length <= 6 ||  formData.message.length <= 20 || )
		return true;
	};

	const handleSubmit = async (e) => {
		ReactGA.event({
			category: "Contact",
			action: "Contact Sent",
			label: "Contact request sent",
		});
		if (validate(formData)) {
			e.preventDefault();
			try {
				let res = await axios.post("/api/contact", formData, {
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (res.status === 200) {
					dispatch({
						type: Types.POST_CONTACT_SUCCESS,
						payload: res.data.name,
					});
				}
			} catch (error) {}
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
		if (e.target.name === "email") {
			if (
				e.target.value.length >= 6 &&
				e.target.value.indexOf("@") !== -1 &&
				e.target.value.indexOf(".") !== -1
			) {
				setFormDataValidation({
					...formDataValidation,
					email: true,
				});
			}
			if (
				e.target.value.length < 6 ||
				e.target.value.indexOf("@") === -1 ||
				e.target.value.indexOf(".") === -1
			) {
				setFormDataValidation({
					...formDataValidation,
					email: false,
				});
			}
		}
		if (e.target.name === "name") {
			if (e.target.value.length >= 4) {
				setFormDataValidation({
					...formDataValidation,
					name: true,
				});
			}
			if (e.target.value.length < 4) {
				setFormDataValidation({
					...formDataValidation,
					name: false,
				});
			}
		}
		if (e.target.name === "phone") {
			let _phone = "";
			Array.from(formData.phone).map((p) => {
				if (parseInt(p)) {
					_phone += p;
				}
			});
			if (_phone.length === 10) {
				_phone = `1${_phone}`;
			}
			if (_phone.length !== 11) {
				setFormDataValidation({
					...formDataValidation,
					phone: false,
				});
			}
			if (_phone.length === 11) {
				setFormDataValidation({
					...formDataValidation,
					phone: true,
				});
			}
		}
		if (e.target.name === "company") {
			if (e.target.length < 4) {
				setFormDataValidation({
					...formDataValidation,
					company: true,
				});
			}
			if (e.target.length >= 4) {
				setFormDataValidation({
					...formDataValidation,
					company: true,
				});
			}
		}
		if (e.target.name === "message") {
			if (e.target.length < 50) {
				setFormDataValidation({
					...formDataValidation,
					company: true,
				});
			}
			if (e.target.length >= 50) {
				setFormDataValidation({
					...formDataValidation,
					company: true,
				});
			}
		}
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
				//
				// if (stepTwoFocusRef) {
				// 	stepTwoFocusRef.focus();
				// }
			},
		});
	};

	const observeHeightChange = (data) => {
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
							autoComplete={"name"}
							placeHolder="Name"
							valid={formData.name}
							step={1}
						/>
						<InputEm
							handleChange={handleChange}
							_name={"email"}
							valid={formData.email}
							type={"email"}
							autoComplete={"email"}
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
							valid={formData.company}
							step={1}
						/>
						<InputEm
							handleChange={handleChange}
							_name={"phone"}
							helperText={"Phone Number (optional)"}
							valid={formData.phone}
							placeHolder="Phone"
							step={1}
							inputMode="tel"
							autoComplete={"tel"}
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
							valid={formData.message}
							className={clsx(
								classes.contactFormTextArea,
								"contactFormTextArea"
							)}
							// TODO: make sure this focuses on the textarea automatically on next click
							// ref={(tag) => setStepTwoFocusRef(tag)}
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
