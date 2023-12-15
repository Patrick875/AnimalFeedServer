const mongoose = require("mongoose");

const animalSchema = mongoose.Schema(
	{
		animalId: {
			type: String,
			require: [true, "AnimalId is required"],
			trim: true,
		},
	},
	{
		timestamps: true,

		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

animalSchema.virtual("weightandtime", {
	ref: "AnimalWeightAndTime",
	localField: "_id",
	foreignField: "animal",
	justOne: false,
});

animalSchema.virtual("owner", {
	ref: "User",
	localField: "_id",
	foreignField: "animals",
	justOne: false,
});

const Animal = new mongoose.model("Animal", animalSchema);

module.exports = Animal;
