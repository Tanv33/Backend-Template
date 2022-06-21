const express = require("express");
const { upload } = require("../../lib");
const updateProfile = require("./update-profile");
const xrpl = require("./xrpl");

const router = express.Router();

router.use("/xrpl", xrpl);
router.put(
	"/update",
	upload.fields([
		{ name: "profile", maxCount: 1 },
		{ name: "profile_banner", maxCount: 1 }
	]),
	updateProfile
);

module.exports = router;
