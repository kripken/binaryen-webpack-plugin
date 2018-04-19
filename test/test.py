import os, sys
import logging
import shutil
import subprocess

old = os.getcwd()
try:
  logging.warning('go to the root dir')
  os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
  logging.warning('pack us all up')
  subprocess.check_call(['npm', 'pack'])
  logging.warning('create a test dir and copy the relevant stuff there')
  temp_dir = '/tmp/binaryen-webpack-plugin'
  if not os.path.exists(temp_dir):
    os.mkdir(temp_dir)
  shutil.copy(os.path.join('test', 'test.js'), temp_dir)
  shutil.copy(os.path.join('test', 'test.wasm'), temp_dir)
  shutil.copy(os.path.join('test', 'webpack.config.js'), temp_dir)
  package = 'binaryen-webpack-plugin-0.1.0.tgz' # FIXME: version number
  shutil.copy(package, temp_dir)
  logging.warning('go to the temp dir')
  os.chdir(temp_dir)
  logging.warning('install deps and our package itself')
  subprocess.check_call(['npm', 'install', '-D', package])
  logging.warning('install dev packages')
  subprocess.check_call(['npm', 'install', '-D', 'webpack', 'webpack-cli'])
  logging.warning('build')
  subprocess.check_call(['./node_modules/.bin/webpack', '--config=webpack.config.js'])
  logging.warning('verify the output')
finally:
  os.chdir(old)

