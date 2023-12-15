const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const feedingRoutes=require("./routes/feedingRoutes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/", userRoutes);
app.use("/api/v1/animals",feedingRoutes);

module.exports = app;
