const Joi = require("joi");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const { updateDocument, findOne } = require("../../helpers");
const fs = require("fs");

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
		if (req.files) {
			if (req.files.profile) {
				const profile = await cloudinary.uploader.upload(req.files.profile[0].path);
				req.body.profile = profile.url;
				fs.unlinkSync(req.files.profile[0].path);
				console.log(profile);
			}
			if (req.files.profile_banner) {
				const profile_banner = await cloudinary.uploader.upload(req.files.profile_banner[0].path);
				req.body.profile_banner = profile_banner.url;
				fs.unlinkSync(req.files.profile_banner[0].path);
				console.log(profile_banner);
			}
		}
		var updateUser;
		updateUser = {
			...req.body
		};
		if (password) {
			updateUser = { ...req.body, password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)) };
		}
		const checkUser = await findOne("user", { _id: req.userId });
		if (!checkUser) {
			return res.status(404).send({ status: 404, message: "No User found with your token" });
		}
		const user = await updateDocument("user", { _id: req.userId }, updateUser);
		delete user.password;
		return res.status(200).send({ status: 200, user });
	} catch (e) {
		console.log(e);
		return res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = updateProfile;
