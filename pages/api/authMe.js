import { connectDB } from "../../util/connectDB";
import Cookies from "cookies";
import bcrypt from "bcryptjs";
import User from "../../models/User";
import Contact from "../../models/Contact";
const nc = require("next-connect");

const handler = nc();

handler.post(async (req, res) => {
	const { name, password } = req.body;
	try {
		let user = await User.findOne({ email: name });
		if (!user) {
			return res.json({ success: false, msg: "User not found." });
		}
		let passed = await bcrypt.compare(password, user.password);

		if (passed) {
			let contacts = await Contact.find().limit(50).sort({ date: -1 });
			return res
				.status(200)
				.json({ success: true, authID: user._id, contacts: contacts });
		}
		if (!passed) {
			return res.status(401).json({ success: false });
		}
	} catch (error) {
		res.status(500).send(`Ah shucky ducky... auth failed. ${error.message}`);
	}
});

export default connectDB(handler);
