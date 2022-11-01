import { connectDB } from "../../util/connectDB";
// const sendMessage = require("../../util/sendSMS");
const nc = require("next-connect");
const Contact = require("../../models/Contact");

const handler = nc();

handler.post(async (req, res) => {
	console.log("req.body: ", req.body);
	const { email, name, phone, company, message } = req.body;
	try {
		const newContact = new Contact({
			name,
			email,
			message,
			phone,
			company,
		});

		const addContact = await newContact.save();
		res.json(addContact);
	} catch (error) {
		res.status(500).send(`Oh $**%. Post failed. ${error.message}`);
	}
});

export default connectDB(handler);
