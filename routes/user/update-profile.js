const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { updateDocument, findOne } = require("../../helpers");

const updateSchema = Joi.object({
	first_name: Joi.string(),
	last_name: Joi.string(),
	username: Joi.string(),
	password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
});
const updateProfile = async (req, res) => {
	try {
		await updateSchema.validateAsync(req.body);
		const { password } = req.body;
		var updateUser;
		if (password) {
			updateUser = { ...req.body, password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)) };
		}
		updateUser = {
			...req.body
		};
		const checkUser = await findOne("user", { _id: req.userId });
		if (!checkUser) {
			return res.status(404).send({ status: 404, message: "No User found with your token" });
		}
		const user = await updateDocument("user", { _id: req.userId }, updateUser);
		return res.status(200).send({ status: 200, user });
	} catch (e) {
		console.log(e);
		return res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = updateProfile;
