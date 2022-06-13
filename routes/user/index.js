const express = require("express");
const updateProfile = require("./update-profile");

const router = express.Router();

router.put("/update", updateProfile);

module.exports = router;
