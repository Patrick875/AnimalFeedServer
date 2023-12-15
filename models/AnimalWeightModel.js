const mongoose = require("mongoose");

const animalWeightSchema = mongoose.Schema({
	animal: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Animal",
		require: [true, "Animal Id is required"],
		trim: true,
	},
	weight: Number,
	date: Date,
});

const AnimalWeight = new mongoose.model("AnimalWeight", animalWeightSchema);

module.exports = AnimalWeight;
