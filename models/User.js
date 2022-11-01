const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	userID: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.models?.User || mongoose.model("User", UserSchema);
