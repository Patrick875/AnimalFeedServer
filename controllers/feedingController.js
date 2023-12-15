const Animal = require("./../models/AnimalModel");
const AnimalWeight = require("./../models/AnimalWeightModel");
const AnimalTime = require("./../models/AnimalTimeModel");

exports.getAll = async (req, res) => {
	const animals = await Animal.find().populate("weights").populate("times");
	res.status(200).json({
		status: "success",
		results: animals.length,
		data: animals,
	});
};
exports.getOne = async (req, res) => {
	const animal = await Animal.findById(req.params.id)
		.populate("weights")
		.populate("times");
	res.status(200).json({
		status: "success",
		data: animal,
	});
};
exports.addFeedings = async (req, res) => {
	const { animalId, weight, time } = req.query;
	let animal = await Animal.findById(animalId);
	if (!animal) {
		animal = await Animal.create(animalId);
	}
	const date = Date.now();
	const animalWeight = await AnimalWeight.create({
		animal: animal._id,
		weight: weight,
		date,
	});
	const animalTime = await AnimalTime.create({
		animal: animal._id,
		time: time,
		date,
	});
	res.status(201).json({
		status: "success",
		data: animal,
	});
};

exports.deleteAnimal = async (req, res) => {
	await Animal.findByIdAndDelete(req.params.id);
	res.status(204).json({
		status: "success",
		message: "deleted",
	});
};

exports.deleteAll = async (req, res) => {
	await Animal.deleteMany();
	res.status(204).json({
		status: "success",
		message: "deleted",
	});
};
