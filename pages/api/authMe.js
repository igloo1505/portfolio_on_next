import { connectDB } from "../../util/connectDB";
import Cookies from "cookies";
import bcrypt from "bcryptjs";
import User from "../../models/User";
const nc = require("next-connect");

const handler = nc();

handler.post(async (req, res) => {
	const { password, userID } = req.body;
	try {
		let salt = bcrypt.genSalt(10);
		let hashed = bcrypt.hash(password, salt);
		console.log("hashed: ", password, hashed);
		const user = new User({
			userID,
			hashed,
		});
		const newUser = user;
		// const newUser = await user.save()
		return res.json(newUser);
	} catch (error) {
		res.status(500).send(`Ah shucky ducky... auth failed. ${error.message}`);
	}
});

export default connectDB(handler);
