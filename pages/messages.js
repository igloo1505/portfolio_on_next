/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import classes from "../styles/messages.module.scss";
import { connect, useDispatch } from "react-redux";
import clsx from "clsx";
import MessageCard from "../components/pages/MessageCard";
import mongoose from "mongoose";
import Contact from "../models/Contact";

const messages = ({ contacts, hasAuth }) => {
	console.log("contacts: ", contacts);
	const [extraStyle, setExtraStyle] = useState({});
	const [isAuthed, setIsAuthed] = useState(false);
	useEffect(() => {
		setIsAuthed(hasAuth);
	}, [hasAuth]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			let height = document
				.getElementById("navbar-container-id")
				?.getBoundingClientRect()?.height;
			let extras = {
				marginTop: `${height}px`,
			};
			if (!isAuthed) {
				extras.minHeight = `calc(100vh - ${height}px)`;
			}
			setExtraStyle(extras);
		}
	}, []);

	const handleDelete = ({ id }) => {
		console.log("id: ", id);
	};
	const toggleRead = ({ id }) => {
		console.log("id: ", id);
	};

	return (
		<>
			{isAuthed ? (
				<div className={classes["messages-container"]} style={extraStyle}>
					{contacts.map((c, index) => {
						return (
							<MessageCard
								key={`message-card-${index}`}
								message={c}
								index={index}
								handleDelete={handleDelete}
								toggleRead={toggleRead}
							/>
						);
					})}
				</div>
			) : (
				<div className={classes.unAuthedContainer} style={extraStyle}>
					Not Authed
				</div>
			)}
		</>
	);
};

export default messages;

export async function getServerSideProps(context) {
	console.log("context: ", context);
	const Contacts = await mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(async () => {
			let c = await Contact.find({});
			return c;
		});
	return {
		props: {
			contacts: JSON.parse(JSON.stringify(Contacts)),
			hasAuth: false,
		},
	};
}
