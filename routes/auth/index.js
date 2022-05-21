const express = require("express");
const router = express.Router();
const signUp = require("./signup");
const loginUser = require("./login");
// const checkPassword = require("./check-password");
// const { tokenVerification } = require("../../middleware");

// ROUTES * /api/auth/
router.post("/login", loginUser);
router.post("/register", signUp);
// router.post("/", checkPassword);

module.exports = router;
