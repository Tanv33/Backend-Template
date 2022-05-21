const express = require("express");
const router = express.Router();
const addUserType = require("./add-user-type");
const deleteUserType = require("./delete-user-type");
const getUserTypes = require("./get-user-types");
const updateUserType = require("./update-user-type");

// ROUTES * /api/user/
router.get("/get-user-types", getUserTypes);
router.post("/add-user-type", addUserType);
router.delete("/delete-user-type", deleteUserType);
router.put("/update-user-type/:id", updateUserType);

module.exports = router;
