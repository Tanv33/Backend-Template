const express = require("express");
const { tokenVerification } = require("../middleware");
const auth = require("./auth");
const userType = require("./user-type");
const user = require("./user");
const xumm = require("./xumm");
const router = express.Router();

// AUTH Routes * /api/auth/*
router.use("/auth", auth);
router.use("/user-type", userType);
router.use("/user", tokenVerification, user);
router.use("/xumm", xumm);

module.exports = router;
