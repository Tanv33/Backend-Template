const mongoose = require("mongoose");
const schemaType = require("../../types");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: schemaType.TypeString,
      required: true,
    },
    last_name: {
      type: schemaType.TypeString,
      required: true,
    },
    username: {
      type: schemaType.TypeString,
      required: true,
    },
    email: {
      type: schemaType.TypeString,
      required: true,
      unique: true,
    },
    password: {
      type: schemaType.TypeString,
      requried: true,
    },
    status: {
      type: schemaType.TypeString,
      default: "Active",
    },
    type: {
      type: schemaType.ObjectID,
      ref: "user-types",
    },
    job_id: {
      type: schemaType.TypeString,
    },
    created_date: {
      type: schemaType.TypeDate,
      default: Date.now,
    },
    locations: {
      type: [schemaType.TypeObjectId],
      ref: "location",
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
