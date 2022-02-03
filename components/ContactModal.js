import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactGA from "react-ga";

const ContactModal = (props) => {
	const { open, setModalIsOpen } = props;
	const [contact, setContact] = useState({});

	const handleInput = (name, data) => {
		setContact({ ...contact, [name]: data });
	};
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const handleSubmit = async () => {
		ReactGA.event({
			category: "Contact",
			action: "Submitted Contact Request",
			label: "Contact",
		});
		await Axios.post("/contactInput", contact, config);
		setContact({});
	};

	return (
		<div id="contactModal" className="modal">
			<div className="modal-content">
				<h4>Let me know how I can help</h4>
				<div className="row">
					<div className="input-field col s6">
						<input
							placeholder="Name"
							className="input validate"
							id="Name"
							type="text"
							value={contact.name}
							onChange={(e) => handleInput("name", e.target.value)}
						/>
						<label htmlFor="Name">Name</label>
					</div>
					<div className="input-field col s6">
						<input
							placeholder="Your Email"
							className="input validate"
							id="Email"
							type="text"
							value={contact.email}
							onChange={(e) => handleInput("email", e.target.value)}
						/>
						<label htmlFor="Email">Email</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<textarea
							id="message"
							className="materialize-textarea"
							value={contact.message}
							onChange={(e) => handleInput("message", e.target.value)}
						></textarea>
						<label htmlFor="message">How can I help?</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					className="modal-close waves-effect waves-green btn-flat"
					onClick={handleSubmit}
				>
					Submit
				</a>
			</div>
		</div>
	);
};

export default ContactModal;
