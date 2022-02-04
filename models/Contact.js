const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	company: {
		type: String,
	},
	message: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Contact", ContactSchema);
