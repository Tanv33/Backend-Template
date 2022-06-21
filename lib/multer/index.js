const multer = require("multer");

const storageConfig = multer.diskStorage({
	destination: "./uploads/",
	filename: function (req, file, cb) {
		cb(null, `${new Date().getTime()}---${file.originalname}`);
	}
});

const upload = multer({ storage: storageConfig });

module.exports = upload;
