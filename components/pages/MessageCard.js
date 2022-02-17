import React, { useState, useEffect } from "react";
import classes from "../../styles/messages.module.scss";
import clsx from "clsx";
import gsap from "gsap";
import day from "dayjs";

const MessageCard = ({
	message: { email, name, phone, company, message, read, date, _id },
	handleDelete,
	toggleRead,
	index,
}) => {
	const [deleteTimerStart, setDeleteTimerStart] = useState(null);

	const handleDeleteClick = () => {
		if (!deleteTimerStart) {
			setDeleteTimerStart(Date.now());
			setTimeout(() => {
				setDeleteTimerStart(null);
			}, 3000);
		}
		if (deleteTimerStart && Date.now() - deleteTimerStart <= 3000) {
			handleDelete({ id: _id });
		}
	};

	useEffect(() => {
		if (deleteTimerStart) {
			allowDeleteAnim({ index, id: _id });
		}
	}, [deleteTimerStart]);
	let _date = day(date, "MM-DD-YY");
	return (
		<div className={classes["message-card"]}>
			<div className={classes["message-card-top"]}>
				<span>{name}</span>
				<span>{day(date).format("MMM-D-YY")}</span>
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
					Read
				</button>
			</div>
		</div>
	);
};

export default MessageCard;

const allowDeleteAnim = ({ index, id }) => {
	gsap.to(`#`, vars);
};
