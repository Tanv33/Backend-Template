const mongoose = require("mongoose");
const userTypeSchema = require("./user-type.schema");

const userType = mongoose.model("user-types", userTypeSchema);

module.exports = userType;
