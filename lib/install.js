'use strict';

const binBuild = require('bin-build');
const log = require('logalot');
const path = require('path');
const pkg = require('../package.json');
const bin = path.join(__dirname, '..', 'vendor');

log.info('compiling dssim from source');

binBuild.url(`https://github.com/pornel/dssim/archive/${pkg.version}.tar.gz`, [
	`cross-env CARGO_TARGET_DIR="${bin}" CARGO_TERM_VERBOSE=true cargo build --release`,
])
.then(() => log.success('dssim built successfully'))
.catch(err => log.error(err.stack))
