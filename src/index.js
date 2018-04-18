var binaryen = require('binaryen');

function BinaryenPlugin() {
}

BinaryenPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    console.log("This is an example plugin!!1");
    for (var filename in compilation.assets) {
      console.log('asset: ' + filename + ' : ');
      console.log(                       ' : ' + JSON.stringify(compilation.assets[filename]);
    }
    callback();
  });
};

/*
  "dependencies": {
    "binaryen": "^46.0.0",
    "webpack-sources": "^1.0.1"
  },
*/

