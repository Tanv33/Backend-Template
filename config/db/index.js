const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");

mongoose.connect(
	`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.jxkgx.mongodb.net/?retryWrites=true&w=majority`
);

module.exports = mongoose;
