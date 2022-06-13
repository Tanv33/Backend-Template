const express = require("express");
const connectWallet = require("./connect-wallet");
const getBalance = require("./getBalance");

const router = express.Router();

router.get("/signIn/:socketId", connectWallet); // "liveXum"  "result"
router.get("/get-balance/:account", getBalance);
// router.post("");
// router.put("");
// router.delete("");

module.exports = router;
