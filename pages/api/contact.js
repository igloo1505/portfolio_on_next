import { connectDB } from "../../util/connectDB";
const sendMessage = require("./sendSMS");
const nc = require("next-connect");
const Contact = require("../../models/Contact");

const handler = nc();

handler.post(async (req, res) => {
	console.log("backend reached");
	const { email, name, phone, company, message } = req.body;
	console.log(`Message: ${message}`);
	// TODO: MAKE SURE THIS GETS ADDED BACK IN!
	// sendMessage.sendMessage(message);
	try {
		const newContact = new Contact({
			name,
			email,
			message,
			phone,
			company,
		});
		console.log({ newContact });
		const addContact = await newContact.save();
		res.json(addContact);
	} catch (error) {
		console.error(error.message);
		res.status(500).send(`Oh $**%. Post failed. ${error.message}`);
	}
});

export default connectDB(handler);
