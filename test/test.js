//
// Used for testing purposes only
//

var BinaryenWebpackPlugin = require("binaryen-webpack-plugin");

module.exports = {
  entry: "./test.js",
  output: {
    filename: 'test.bundle.js',
    path: __dirname
  },
  plugins: [
    new BinaryenWebpackPlugin({ sourceMap: true })
  ],
};

