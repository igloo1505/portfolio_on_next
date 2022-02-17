import axios from "axios";

export const toggleRead = async ({ id }) => {
	try {
		const res = await axios.post(
			`/api/toggleRead`,
			{ contactId: id },
			{
				"Content-Type": "application/json",
			}
		);
		return res;
	} catch (error) {
		console.error("error: ", error);
	}
};
export const deleteMessage = async ({ id }) => {
	try {
		const res = await axios.post(
			`/api/deleteContact`,
			{ contactId: id },
			{
				"Content-Type": "application/json",
			}
		);
		return res;
	} catch (error) {
		console.error("error: ", error);
	}
};

export const authenticateMe = async ({ password }) => {
	try {
		const res = await axios.post(
			`/api/authMe`,
			{ password },
			{
				"Content-Type": "application/json",
			}
		);
		return res;
	} catch (error) {
		console.error("error: ", error);
	}
};
