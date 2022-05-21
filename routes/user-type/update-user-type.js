const { updateDocument } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  type: Joi.string().required(),
  status: Joi.string().required(),
});

const updateUserType = async (req, res) => {
  try {
    const validate = await schema.validateAsync(req.body);
    const user_type_updated = await updateDocument(
      "userType",
      { _id: req.params.id },
      req.body
    );
    return res.status(200).send({ status: 200, user_type_updated });
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = updateUserType;
