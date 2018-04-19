Binaryen Webpack Plugin
-----------------------

A plugin for webpack that runs Binaryen on WebAssembly assets, shrinking and optimizing them. You can think of Binaryen as a minifier for WebAssembly the same way that there are minifiers for JavaScript.

Install
=======

```bash
npm i -D binaryen-webpack-plugin
```

Usage
=====

``` javascript
var BinaryenPlugin = require("binaryen-webpack-plugin");
module.exports = {
  plugins: [
    new BinaryenPlugin({})
  ]
}
```

Arguments
=========

TODO
====

 * Arguments (pick the optimization level, passes to run, files to filter, etc.).
 * Code cleanup (I'm new to npm and webpack).
 * This currently runs the Binaryen optimizer on each wasm asset. We can do even better by running Binaryen metadce on the entire graph, so that if JS (and other wasm modules) don't use something a wasm file then we can remove it. This would need deeper integration with webpack.

