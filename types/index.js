const mongoose = require("mongoose");

const TypeString = mongoose.Schema.Types.String;
const TypeArray = mongoose.Schema.Types.Array;
const TypeBoolean = mongoose.Schema.Types.Boolean;
const TypeNumber = mongoose.Schema.Types.Number;
const TypeObjectId = mongoose.Schema.Types.ObjectId;
const TypeDecimal = mongoose.Schema.Types.Decimal128;
const TypeDate = mongoose.Schema.Types.Date;

const ObjectID = mongoose.Types.ObjectId;

module.exports = {
  TypeString,
  TypeArray,
  TypeBoolean,
  TypeNumber,
  TypeObjectId,
  TypeDecimal,
  TypeDate,
  ObjectID,
};
