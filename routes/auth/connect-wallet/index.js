// const Joi = require("joi");
// const { findOne, insertNewDocument, findOneAndSelect } = require("../../../helpers");
// const { SECRET } = require("../../../config");
// const jwt = require("jsonwebtoken");

// const schema = Joi.object({
// 	address: Joi.string().required(),
// 	type: Joi.string().required()
// });

// const connectWallet = async (req, res) => {
// 	try {
// 		await schema.validateAsync(req.body);
// 		const { address, type } = req.body;
// 		const check_address = await req.web3.utils.isAddress(address);
// 		if (!check_address) {
// 			return res.status(400).send({
// 				status: 400,
// 				message: "Your provided username is not valid"
// 			});
// 		}
// 		let user = await findOneAndSelect("user", { username }, "-followers -following");
// 		if (user) {
// 			const token = jwt.sign({ user }, SECRET);
// 			return res.status(200).send({ status: 200, user, token });
// 		}
// 		const user_type = await findOne("userType", { type });
// 		if (!user_type) {
// 			return res.status(404).send({ status: 404, message: "No User Type Found" });
// 		}
// 		user = await insertNewDocument("user", {
// 			username,
// 			full_Name: "Unnamed",
// 			bio: "I just love NFTs and that's the reason I joined this cool Marketplace. Looking forward to engaging with all of you guys. Cheers!",
// 			type: user_type._id
// 		});
// 		const token = jwt.sign({ user }, SECRET);
// 		return res.status(200).send({ status: 200, user, token });
// 	} catch (e) {
// 		console.log(e);
// 		return res.status(400).send({ status: 400, message: e.message });
// 	}
// };

// module.exports = connectWallet;
