import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import classes from "../css/NewContactModal.module.scss";
import clsx from "clsx";
import * as Types from "../state/Types";
import { formTransitionMobile } from "../animations/formTransitionMobile";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Too Short!")
		.max(20, "Too Long!")
		.required("Required"),
	phone: Yup.string().min(7, "Not long enough...").max(11, "Too long!"),
	company: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
	message: Yup.string()
		.min(10, "Too Short!")
		.max(500, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
});

const NewContactModal = ({
	state: {
		contactModal: { isOpen },
		toast: { submittedBy },
	},
	dispatch,
}) => {
	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			phone: "",
			company: "",
			message: "",
		},
		validationSchema: ContactSchema,
		onSubmit: async (values) => {
			try {
				let res = await axios.post("/api/contact", values, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (res.status === 200) {
					handleBack();
					formik.resetForm();
					dispatch({
						type: Types.POST_CONTACT_SUCCESS,
						payload: res.data.name,
					});
				}
			} catch (error) {
				console.log("error: ", error);
			}
		},
	});

	const [formStep, setFormStep] = useState(1);
	const [stepTwoHeight, setStepTwoHeight] = useState({});
	const [rightButtonText, setRightButtonText] = useState("Next");
	const [currentRoute, setCurrentRoute] = useState("index");
	const router = useRouter();

	useEffect(() => {
		console.log("router.asPath: ", router.asPath);
		if (router.asPath === "/") {
			setCurrentRoute("index");
		}
		if (router.asPath === "/messages") {
			setCurrentRoute("messages");
		}
	}, [router.asPath]);

	const textAreaRef = useRef(null);

	// TODO: add formik here and forgo this ridiculous validation
	const handleSubmit = async (e) => {
		ReactGA.event({
			category: "Contact",
			action: "Contact Sent",
			label: "Contact request sent",
		});
		// if (validate(formData)) {
		// 	e.preventDefault();
		// 	console.log("Made it here...");
		// 	try {
		// 		let res = await axios.post("/api/contact", formData, {
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 			},
		// 		});

		// 		console.log("res: ", res);
		// 		console.log("res.data: ", res.data);

		// 		if (res.status === 200) {
		// 			dispatch({
		// 				type: Types.POST_CONTACT_SUCCESS,
		// 				payload: res.data.name,
		// 			});
		// 		}
		// 	} catch (error) {
		// 		console.log("error: ", error);
		// 	}
		// }
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
			}, 900);
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
			formik.resetForm();
			setFormStep(1);
		}
	}, [submittedBy]);

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
			onComplete: () => {},
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
				classes[`backdrop-${currentRoute}`],
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
							handleChange={formik.handleChange}
							_name={"name"}
							value={formik.values.name}
							helperText={"Name"}
							autoComplete={"name"}
							placeHolder="Name"
							step={1}
							_type="text"
							errors={formik.errors.name}
						/>
						<InputEm
							handleChange={formik.handleChange}
							_name={"email"}
							value={formik.values.email}
							_type="email"
							autoComplete={"email"}
							helperText={"Email"}
							placeHolder="Email"
							step={1}
							errors={formik.errors.email}
						/>
					</div>
					<div className={classes.formRow}>
						<InputEm
							handleChange={(e) => {
								console.log("formik", formik);
								formik.handleChange(e);
							}}
							_name={"company"}
							value={formik.values.company}
							helperText={"Your Company (if applicable)"}
							placeHolder="Company"
							_type="text"
							step={1}
						/>
						<InputEm
							handleChange={formik.handleChange}
							_name={"phone"}
							helperText={"Phone Number (optional)"}
							placeHolder="Phone"
							value={formik.values.phone}
							step={1}
							_type="tel"
							inputMode="tel"
							autoComplete={"tel"}
							errors={formik.errors.tel}
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
							value={formik.values.message}
							className={clsx(
								classes.contactFormTextArea,
								"contactFormTextArea"
							)}
							name="message"
							_type="text"
							onChange={formik.handleChange}
							errors={formik.errors.message}
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
						onClick={formStep === 1 ? handleNext : formik.handleSubmit}
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
	value,
	_type,
	autoComplete,
	inputMode,
	errors,
}) => {
	let pattern = _type === "tel" ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : null;
	const [hasErrors, setHasErrors] = useState(false);
	useEffect(() => {
		console.log("errors: ", errors);
		let _errors = errors;
		if (_type === "email" && value.length <= 8) {
			_errors = false;
		}
		setHasErrors(_errors);
	}, [errors, value.length]);

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
				type={_type}
				placeholder={placeHolder}
				value={value}
				onChange={(e) => {
					if (_type === "tel") {
						let d = e.target.value.match(/\d+/g)?.join("");
						e.target.value = typeof d === "undefined" ? "" : d;
						e.target.value =
							e.target.value.length > 11
								? e.target.value.slice(0, 11)
								: e.target.value;
					}
					handleChange(e);
				}}
				name={_name}
				handleChange
				autoComplete={autoComplete}
				inputMode={inputMode}
				pattern={pattern}
			/>
			<div
				className={clsx(
					classes.helperText,
					hasErrors && classes.helperTextErrors
				)}
			>
				{hasErrors ? hasErrors : helperText}
			</div>
		</div>
	);
};
