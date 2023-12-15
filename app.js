const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/", userRoutes);

module.exports = app;
