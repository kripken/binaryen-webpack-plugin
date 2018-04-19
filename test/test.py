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
  orig_size = os.stat('test.wasm').st_size
  opt_size = None
  for name in os.listdir('dist'):
    if name.endswith('.wasm'):
      opt_size = os.stat(os.path.join('dist', name)).st_size
  assert opt_size, 'must fine the wasm, and size must be > 0'
  assert opt_size < orig_size - 15, 'must be a bunch of bytes smaller'
  assert float(opt_size) / orig_size < 0.75, 'must be proportionally noiticeable smaller'
  logging.warning('ok!')
finally:
  os.chdir(old)

