const path = require("path");
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
mode: "development",
	entry: { bundle: "./src/index.js" },
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Repro case",
			template: path.resolve(__dirname, "index.html"),
			inlineSource: "^/"
		}),
		new HtmlWebpackInlineSourcePlugin(),
		new DynamicCdnWebpackPlugin({
			env: "production"
		})
	]
};
