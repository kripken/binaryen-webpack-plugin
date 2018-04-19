var Binaryen = require('binaryen');

function optimize(filename) {
  var originalBuffer = ..get the original buffer here.. // XXX or should we receive it?
  var module = Binaryen.readBinary(originalBuffer, size); // XXX why is there a size?
  module.optimize();
  var optimizedBuffer = module.emitBinary();
  ..write the optimized buffer here..  // XXX or should we return it?
}

function BinaryenPlugin() {
}

BinaryenPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    console.log("This is an example plugin!!1");
    for (var filename in compilation.assets) {
      console.log('asset: ' + filename + ' : ');
      console.log(                       ' : ' + JSON.stringify(compilation.assets[filename]);
      // TODO: optimize(filename);
    }
    callback();
  });
};

module.exports = BinaryenPlugin;

