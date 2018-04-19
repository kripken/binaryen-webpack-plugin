#
# this will be a travis test in some glorious future
#

set -e

# create a package from us
npm pack
# create a test dir and copy the relevant stuff there
mkdir /tmp/binaryen-webpack-plugin
cp test/* /tmp/binaryen-webpack-plugin/
cp binaryen-webpack-plugin-*.tgz /tmp/binaryen-webpack-plugin/
cd /tmp/binaryen-webpack-plugin/
# install deps and our package itself
npm install path
npm install webpack
npm install webpack-cli
npm install binaryen-webpack-plugin-0.1.0.tgz 
# build
./node_modules/.bin/webpack test.js

