//jshint esversion:9
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	names: {
		type: String,
		trim: true,
		required: [true, "a user must have a name"],
	},
	telephone: {
		type: String,
		unique: [true, "account already exists"],
		required: [true, "user must have phone number"],
	},
	email: {
		type: String,
		unique: [true, "account already exists"],
	},
	password: {
		type: String,
		required: [true, "user must provide a password"],
		select: false,
	},
	animals: { type: mongoose.Schema.Types.ObjectId, ref: "Animal" },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
