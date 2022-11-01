import { connectDB } from "../../util/connectDB";
const nc = require("next-connect");
const Contact = require("../../models/Contact");

const handler = nc();

handler.post(async (req, res) => {
	console.log("req.body: ", req.body);
	const { id } = req.body;
	try {
		let contact = await Contact.findById(id);
		contact.read = !contact.read;
		let updatedContact = await contact.save();
		res.json(updatedContact);
	} catch (error) {
		res.status(500).send(`Oh $**%. Update failed. ${error.message}`);
	}
});

export default connectDB(handler);
