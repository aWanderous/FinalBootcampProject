const mongoose = require("mongoose");
const db = require("../models/doList");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wedding");

const weddingSeed = [
	{
		task: "Suit for groom",
		details: "Suit up the groom",
	},
	{

	}
];

db.Movie.remove({})
	.then(() => db.Movie.collection.insertMany(weddingSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});