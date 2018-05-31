const path = require("path");
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Repro case",
            template: path.resolve(__dirname, "index.html"),
            inlineSource: '.js$'
        }),
        // new HtmlWebpackInlineSourcePlugin(),
        new DynamicCdnWebpackPlugin({
            env: "production"
        })
    ]
}