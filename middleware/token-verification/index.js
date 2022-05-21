const jwt = require("jsonwebtoken");
const Config = require("../../config");
const { getDbUserData } = require("../../helpers");

const tokenVerification = (req, res, next) => {
  let token = req.headers["token"];
  if (!token) {
    return res.status(404).send({ status: 404, message: "No token provided!" });
  }
  jwt.verify(token, Config.secret, async (err, decoded) => {
    if (err) {
      return res
        .status(400)
        .send({ status: 400, message: "Token Unauthorized!" });
    }
    const isUserExist = await getDbUserData(
      "user",
      "mobileNumber",
      decoded.mobileNumber
    );
    if (!isUserExist) {
      return res
        .status(404)
        .send({ status: 404, message: "User does not exist." });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { tokenVerification: tokenVerification };
