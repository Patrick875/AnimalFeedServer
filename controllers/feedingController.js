const Animal = require("./../models/AnimalModel");
const AnimalWeightAndTime = require("./../models/AnimalWeightAndTime");

exports.getAll = async (req, res) => {
	try {
		const animals = await Animal.find()
			.populate({ path: "weightandtime", options: { sort: { date: -1 } } })
			.populate("owner")
			.exec();
		res.status(200).json({
			status: "success",
			results: animals.length,
			data: animals,
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "failed fetching", status: "server error" });
	}
};
exports.getOne = async (req, res) => {
	const animal = await Animal.findOne({ animalId: req.params.id })
		.populate({ path: "weightandtime", options: { sort: { date: -1 } } })
		.populate("owner");
	res.status(200).json({
		status: "success",
		data: animal,
	});
};
exports.addFeedings = async (req, res) => {
	const { animalId, weight, time } = req.query;
	try {
		let animal = await Animal.findOne({ animalId });
		if (!animal) {
			animal = await Animal.create({ animalId });
		}
		const date = Date.now();

		const weightandtime = await AnimalWeightAndTime.create({
			animal: animal.id,
			weight: weight,
			time,
			date,
		});

		res.status(201).json({
			status: "success",
			data: animal,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ data: "server error", message: "server error" });
	}
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
