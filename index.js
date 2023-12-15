const dotenv = require("dotenv");
const mongoose= require('mongoose')
dotenv.config({ path: "./.env" });

const app = require("./app");

const PORT = process.env.PORT || 5100;
const DB = process.env.ONLINE_DATABASE_URL;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((con) => {
		console.log("DB connection successful");
	})
	.catch((err) => {
		console.log(err.name, err.message);
	});
