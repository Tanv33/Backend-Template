const mongoose = require("mongoose");
const userSchema = require("./user-schema");

const user = mongoose.model("users", userSchema);

module.exports = user;
