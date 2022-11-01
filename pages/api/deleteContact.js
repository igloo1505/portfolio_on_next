import { connectDB } from "../../util/connectDB";
const nc = require("next-connect");
const Contact = require("../../models/Contact");

const handler = nc();

handler.post(async (req, res) => {
	console.log("req.body: ", req.body);
	const { id } = req.body;
	try {
		let contact = await Contact.findByIdAndDelete(id);
		res.json(contact);
	} catch (error) {
		res.status(500).send(`Oh $**%. Removing Message failed. ${error.message}`);
	}
});

export default connectDB(handler);
