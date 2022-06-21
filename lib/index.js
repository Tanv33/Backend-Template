const cloudinary = require("./cloudinary");
const upload = require("./multer");
const { send_email } = require("./node-mailer");

module.exports = {
	send_email,
	upload,
	cloudinary
};
