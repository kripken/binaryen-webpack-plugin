var Binaryen = require('binaryen');

function optimize(originalBuffer) {
  var module = Binaryen.readBinary(originalBuffer);
  module.optimize();
  var optimizedBuffer = module.emitBinary();
  return Buffer.from(optimizedBuffer);
}

function BinaryenPlugin() {
}

BinaryenPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    for (var filename in compilation.assets) {
      if (/\.wasm$/.test(filename)) {
        // process a wasm asset
        var asset = compilation.assets[filename];
        // TODO: is there a proper API for these property accesses?
        var value = asset._source._value;
        if (!Buffer.isBuffer(value)) {
          console.warn('binaryen-webpack-plugin: .wasm asset that is not a Buffer (' + filename + ')');
          continue;
        }
        // TODO: is there a proper API for this assignment?
//        asset._source._value = optimize(value);
      }
    }
    callback();
  });
};

module.exports = BinaryenPlugin;

