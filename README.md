Binaryen Webpack Plugin
=======================

A plugin for [webpack](http://webpack.js.org/) that runs [Binaryen](https://github.com/WebAssembly/binaryen) on [WebAssembly](http://webassembly.org) assets, shrinking and optimizing them. You can think of Binaryen as a minifier for WebAssembly the same way that there are minifiers for JavaScript.

Install
-------

```bash
npm i -D binaryen-webpack-plugin
```

Usage
-----

``` javascript
var BinaryenPlugin = require("binaryen-webpack-plugin");
module.exports = {
  plugins: [
    new BinaryenPlugin({})
  ]
}
```

TODO
----

 * Arguments (pick the optimization level, passes to run, files to filter, etc.) and docs for them.
 * Code cleanup (I'm new to npm and webpack).
 * This currently runs the Binaryen optimizer on each wasm asset. We can do even better by running Binaryen metadce on the entire graph, so that if JS (and other wasm modules) don't use something a wasm file then we can remove it. This would need deeper integration with webpack.

