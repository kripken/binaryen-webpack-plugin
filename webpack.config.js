//
// Used for testing purposes only
//

var path = require("path");
var webpack = require("webpack");
var binaryenWebpackPlugin = require("binaryen-webpack-plugin");

module.exports = {
  entry: "./src/bwp.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "testing.js",
    library: "testing",
    libraryTarget: "umd"
  },
  plugins: [
    new binaryenWebpackPlugin.BinaryenWebpackPlugin({ sourceMap: true })
  ],
};

