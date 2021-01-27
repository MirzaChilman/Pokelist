const { merge } = require("webpack-merge");
const { resolve } = require("path");

const webpackBase = require("./webpack.base");

module.exports = merge(webpackBase, {
    mode: "production",
    entry: "./index.tsx",
    output: {
        filename: "js/bundle.[contenthash].min.js",
        path: resolve(__dirname, "../dist"),
        publicPath: "/",
    },
    devtool: "source-map",
    plugins: [],
});