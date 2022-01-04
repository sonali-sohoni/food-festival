const path = require("path");
const { fileURLToPath } = require("url");

module.exports = {
	entry: "./assets/js/script.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.bundle.js",
	},
	mode: "development",
};
