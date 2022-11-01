/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import classes from "../styles/messages.module.scss";
import { connect, useDispatch } from "react-redux";
import clsx from "clsx";
import MessageCard from "../components/pages/MessageCard";
import mongoose from "mongoose";
import Contact from "../models/Contact";
import axios from "axios";
import store from "../state/store";
import * as Types from "../state/Types";

const messages = ({ navHeight, contacts }) => {
	const [visibleContacts, setVisibleContacts] = useState([]);
	const [isAuthed, setIsAuthed] = useState(false);
	const [showRead, setShowRead] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		password: "",
	});

	const setContacts = (_contacts) => {
		store.dispatch({
			type: Types.SET_CONTACTS,
			payload: _contacts,
		});
	};

	useEffect(() => {
		if (!isAuthed) return;
		if (!showRead) {
			setVisibleContacts(contacts.filter((c) => !c.read));
		}
		if (showRead) {
			setVisibleContacts(contacts);
		}
	}, [showRead, contacts]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleDelete = ({ id }) => {
		console.log("id: ", id);
	};
	const toggleRead = ({ id }) => {
		console.log("id: ", id);
	};
	const handleSubmit = async () => {
		let res = await axios.post("/api/authMe", formData, {
			"Content-type": "application",
		});
		if (res.data.success) {
			setIsAuthed(true);
			setContacts(res.data?.contacts);
		}
	};

	return (
		<>
			{isAuthed ? (
				<div
					className={classes.messageOuterContainer}
					style={{ marginTop: `${navHeight}px` }}
				>
					<div className={classes.showButtonContainer}>
						<span
							className={clsx(
								classes.showReadButton,
								!showRead && classes.noShowReadButton
							)}
							onClick={() => {
								setShowRead(!showRead);
							}}
						>
							{showRead ? "Hide Read" : "Show Read"}
						</span>
					</div>
					<div className={classes["messages-container"]}>
						{visibleContacts.map((c, index) => {
							return (
								<MessageCard
									key={`message-card-${index}`}
									message={c}
									index={index}
									handleDelete={handleDelete}
									toggleRead={toggleRead}
									setContacts={setContacts}
									contacts={contacts}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<div className={classes.unAuthedContainer}>
					<div className={classes.loginCard}>
						<div className={classes.cardInput}>
							<div>Name</div>
							<input
								type="text"
								name="name"
								autoComplete="email"
								onChange={handleChange}
								value={formData.name}
								placeholder="Name"
							/>
						</div>
						<div className={classes.cardInput}>
							<div>Password</div>
							<input
								type="password"
								name="password"
								autoComplete="password"
								onChange={handleChange}
								placeholder="Password"
								value={formData.password}
							/>
						</div>
						<div className={classes.loginButton} onClick={handleSubmit}>
							Login
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state, props) => ({
	navHeight: state.navbar.height,
	contacts: state.messages.contacts,
	props: props,
});

export default connect(mapStateToProps)(messages);

// export async function getServerSideProps(context) {
// 	console.log("context: ", context);
// 	const Contacts = await mongoose
// 		.connect(process.env.MONGO_URI, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		})
// 		.then(async () => {
// 			let c = await Contact.find({});
// 			return c;
// 		});
// 	return {
// 		props: {
// 			contacts: JSON.parse(JSON.stringify(Contacts)),
// 			hasAuth: false,
// 		},
// 	};
// }
