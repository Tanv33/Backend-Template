const { insertNewDocument } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  type: Joi.string().required(),
  status: Joi.string().required(),
});

const addUserType = async (req, res) => {
  try {
    const validate = await schema.validateAsync(req.body);
    const user_type = await insertNewDocument("userType", req.body);
    return res.status(200).send({ status: 200, user_type });
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = addUserType;
