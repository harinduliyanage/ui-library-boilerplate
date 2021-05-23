// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  // use commented output config if you are running on express server
  //output: {
    //filename: "js/bundle.[contenthash].min.js",
    //path: resolve(__dirname, "../../dist"),
    //publicPath: "/",
  //},
  output: {
    filename: "index.js",
    path: resolve(__dirname, "../../dist"),
    libraryTarget: "umd",
    library: "ui-library"
  },
  devtool: "source-map",
  plugins: [],
});
