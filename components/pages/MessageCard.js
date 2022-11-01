import React, { useState, useEffect } from "react";
import classes from "../../styles/messages.module.scss";
import clsx from "clsx";
import gsap from "gsap";
import day from "dayjs";
import axios from "axios";

const MessageCard = ({
	message: { email, name, phone, company, message, read, date, _id },
	index,
	setContacts,
	contacts,
}) => {
	const [deleteTimerStart, setDeleteTimerStart] = useState(null);

	const handleDeleteClick = async () => {
		let res = await axios.post(
			"/api/deleteContact",
			{ id: _id },
			{
				"Content-type": "application/json",
			}
		);
		setContacts(contacts.filter((c) => c._id !== res.data?._id));
	};

	const toggleRead = async () => {
		let res = await axios.post(
			"/api/toggleRead",
			{ id: _id },
			{
				"Content-type": "application/json",
			}
		);
		setContacts(contacts.map((c) => (c._id === res.data?._id ? res.data : c)));
	};

	let _date = day(date).format("ddd, MM/D/YY [at] h:mma");

	return (
		<div className={classes["message-card"]}>
			<div className={classes["message-card-top"]}>
				<span>{name}</span>
				<span>{_date}</span>
			</div>
			<div className={classes["message-card-inner"]}>{message}</div>
			<div className={classes["message-card-buttonContainer"]}>
				<button
					className={clsx(classes["message-button"], classes.delete)}
					id={`delete-button-${index}`}
					onClick={handleDeleteClick}
				>
					DELETE
				</button>
				<button
					className={classes["message-button"]}
					onClick={() => toggleRead({ id: _id })}
				>
					{read ? "Mark Unread" : "Mark Read"}
				</button>
			</div>
		</div>
	);
};

export default MessageCard;

const allowDeleteAnim = ({ index, id }) => {
	gsap.to(`#`, vars);
};
