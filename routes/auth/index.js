const express = require("express");
const router = express.Router();
const signUp = require("./signup");
const loginUser = require("./login");
const connectWallet = require("./connect-wallet");
// const checkPassword = require("./check-password");
// const { tokenVerification } = require("../../middleware");

// ROUTES * /api/auth/
router.post("/login", loginUser);
router.post("/register", signUp);
// router.post("/connect-wallet", connectWallet);
// router.post("/", checkPassword);

module.exports = router;
