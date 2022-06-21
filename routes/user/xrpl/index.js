const express = require("express");
const getUserNft = require("./get-user-nft");
const mintNft = require("./mint-nft");
const router = express.Router();

router.post("/mint-nft", mintNft);
router.get("/get-user-nft/:account", getUserNft);

module.exports = router;
