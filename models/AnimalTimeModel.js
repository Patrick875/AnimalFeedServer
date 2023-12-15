const mongoose = require("mongoose");

const animalTimeSchema = mongoose.Schema({
	animal: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Animal",
		require: [true, "Animal Id is required"],
		trim: true,
	},
	time: Number,
	date: Date,
});

const AnimalTime = new mongoose.Model("AnimalTime", animalTimeSchema);

module.exports = AnimalTime;
