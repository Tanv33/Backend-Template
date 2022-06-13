const jwt = require("jsonwebtoken");
const Config = require("../../config");
const { findOne } = require("../../helpers");

const tokenVerification = (req, res, next) => {
	try {
		let token = req.headers["token"];
		if (!token) {
			return res.status(404).send({ status: 404, message: "No token provided!" });
		}
		jwt.verify(token, Config.SECRET, async (err, decoded) => {
			if (err) {
				return res.status(400).send({ status: 400, message: "Token Unauthorized!" });
			}
			if (!decoded.user) {
				return res.status(400).send({ status: 400, message: "Upgrade your token" });
			}
			const isUserExist = await findOne("user", { _id: decoded.user._id });
			if (!isUserExist) {
				return res.status(404).send({ status: 404, message: "User does not exist." });
			}
			req.userId = decoded.user._id;
			req.user = decoded.user;
			next();
		});
	} catch (e) {
		console.log("error ocurred in token verification", e);
		return res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = { tokenVerification: tokenVerification };
