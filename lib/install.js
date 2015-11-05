'use strict';

var BinBuild = require('bin-build');
var log = require('logalot');
var path = require('path');
var bin = path.join(__dirname, '..', 'vendor');

log.info('compiling dssimfrom source');

var builder = new BinBuild()
	.src('https://github.com/pornel/dssim/archive/1.1.1.tar.gz')
	.cmd('make DESTDIR=' + bin + (process.platform === 'darwin' ? '/ USE_COCOA=1' : '/'));

return builder.run(function (err) {
	if (err) {
		log.error(err.stack);
		return;
	}

	log.success('dssim built successfully');
});
