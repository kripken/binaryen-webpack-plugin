//
// Used for testing purposes only
//

var path = require('path');

var BinaryenWebpackPlugin = require("binaryen-webpack-plugin");

module.exports = {
  entry: './test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        use: [
          'binary-loader'
        ]
      }
    ]
  },
  plugins: [
    new BinaryenWebpackPlugin()
  ]
};

