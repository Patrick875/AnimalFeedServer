//jshint esversion:9
const express = require("express");
const feedingController = require("./../controllers/feedingController");

const router = express.Router();

router
	.route("/")
	.get(feedingController.getAll)
	.post(feedingController.addFeedings)
	.delete(feedingController.deleteAll);
router
	.route("/:id")
	.get(feedingController.getOne)
	.delete(feedingController.deleteFeeding);

module.exports = router;
