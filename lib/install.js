'use strict';

const binBuild = require('bin-build');
const log = require('logalot');
const path = require('path');
const bin = path.join(__dirname, '..', 'vendor');

log.info('compiling dssimfrom source');

binBuild.url('https://github.com/pornel/dssim/archive/1.3.2.tar.gz', [
	`make DESTDIR=${bin}${(process.platform === 'darwin' ? '/ USE_COCOA=1' : '/')}`
])
.then(() => log.success('gifsicle built successfully'))
.catch(err => log.error(err.stack))
