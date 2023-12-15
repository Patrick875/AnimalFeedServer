const Feeding = require("./../models/FeedingModel");

exports.getAll = async (req, res) => {
	const feedings = await Feeding.find();
	res.status(200).json({
		status: "success",
		results: feedings.length,
		data: {
			feedings,
		},
	});
};
exports.getOne = async (req, res) => {
	const feeding = await Feeding.findById(req.params.id);
	res.status(200).json({
		status: "success",
		data: {
			feeding,
		},
	});
};
exports.addFeedings = async (req, res) => {
	const newFeeding = await Car.create(req.body);
	res.status(201).json({
		status: "success",
		data: {
			newFeeding,
		},
	});
};
exports.updateFeeding = async (req, res) => {
	const feeding = await Feeding.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(203).json({
		status: "success",
		data: {
			feeding,
		},
	});
};
exports.deleteFeeding = async (req, res) => {
	await Feeding.findByIdAndDelete(req.params.id);
	res.status(204).json({
		status: "success",
		message: "deleted",
	});
};

exports.deleteAll = async (req, res) => {
	await Feeding.deleteMany();
	res.status(204).json({
		status: "success",
		message: "deleted",
	});
};
