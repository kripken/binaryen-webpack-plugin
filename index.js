var Binaryen = require('binaryen');

function optimize(filename) {
/*
  var originalBuffer = ..get the original buffer here.. // XXX or should we receive it?
  var module = Binaryen.readBinary(originalBuffer, size); // XXX why is there a size?
  module.optimize();
  var optimizedBuffer = module.emitBinary();
  ..write the optimized buffer here..  // XXX or should we return it?
*/
}

function BinaryenPlugin() {
}

BinaryenPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    for (var filename in compilation.assets) {
      if (/\.wasm$/.test(filename)) {
        // process a wasm asset
        console.log('asset: ' + filename + ' : ');
        var asset = compilation.assets[filename];
console.log(asset);
for (var k in asset) console.log('key: ' + k);
console.log(asset.source());
        var value = asset._source._value;
console.log('VALUE ');
console.log(value);
        console.log(JSON.stringify(value));
        console.log(JSON.stringify(value.type));
        if (!Buffer.isBuffer(value)) {
          console.warn('binaryen-webpack-plugin: .wasm asset that is not a Buffer (' + filename + ')');
          continue;
        }
        console.log('optimize it!');
        // TODO: optimize(filename);
      }
    }
    callback();
  });
};

module.exports = BinaryenPlugin;

