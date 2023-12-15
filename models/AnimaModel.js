const mongoose = require("mongoose");

const AnimalSchema = mongoose.Schema({
	id: {
		type: String,
		require: [true, "Animal Id is required"],
		trim: true,
	},
	times: { type: mongoose.Schema.Types.ObjectId, ref: "AnimalTime" },
	weights: { type: mongoose.Schema.Types.ObjectId, ref: "AnimalWeight" },
	owner: { type: Number, require: [true, "Animal owner Id is required"] },
});

const Animal = new mongoose.Model("Animal", AnimalSchema);

module.exports = Animal;
