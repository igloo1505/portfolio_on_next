const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
	password: {
		type: String,
		required: true,
	},
	userID: {
		type: String,
		required: true,
	},
});

module.exports =
	mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);
