Binaryen Webpack Plugin
-----------------------

A plugin for webpack that runs Binaryen on WebAssembly assets, shrinking and optimizing them.

Install
=======

```bash
npm i -D binaryen-webpack-plugin
```

Usage
=====

<h2 align="center">Usage</h2>

``` javascript
var BinaryenPlugin = require("binaryen-webpack-plugin");
module.exports = {
	plugins: [
		new BinaryenPlugin({
      opts: '-Os' // TODO WHAT?
		})
	]
}

Arguments
=========

TODO

