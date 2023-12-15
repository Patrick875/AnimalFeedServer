const mongoose = require("mongoose");

const animalWeightAndTimeSchema = mongoose.Schema({
	animal: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Animal",
		require: [true, "Animal Id is required"],
		trim: true,
	},
	weight: Number,
	time: Number,
	date: Date,
});

const AnimalWeightAndTime = new mongoose.model(
	"AnimalWeightAndTime",
	animalWeightAndTimeSchema
);

module.exports = AnimalWeightAndTime;
