const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
	id: {
		type: String,
		require: [true, "Animal Id is required"],
		trim: true,
	},
	times: { type: mongoose.Schema.Types.ObjectId, ref: "AnimalTime" },
	weights: { type: mongoose.Schema.Types.ObjectId, ref: "AnimalWeight" },
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		require: [true, "Animal owner Id is required"],
	},
});

const Animal = new mongoose.model("Animal", animalSchema);

module.exports = Animal;
