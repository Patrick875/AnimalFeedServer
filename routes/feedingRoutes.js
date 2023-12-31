//jshint esversion:9
const express = require("express");
const feedingController = require("./../controllers/feedingController");

const router = express.Router();

router.get("/", feedingController.addFeedings);
router.get("/all", feedingController.getAll);

router.delete("/", feedingController.deleteAll);
router
	.route("/:id")
	.get(feedingController.getOne)
	.delete(feedingController.deleteAnimal);

module.exports = router;
