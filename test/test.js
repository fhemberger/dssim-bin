/*global afterEach,beforeEach,it*/
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var BinBuild = require('bin-build');
var binCheck = require('bin-check');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var tmp = path.join(__dirname, 'tmp');

beforeEach(function () {
	mkdirp.sync(tmp);
});

afterEach(function () {
	rimraf.sync(tmp);
});

it('rebuild the dssim binaries', function (cb) {
	new BinBuild()
		.src('https://github.com/pornel/dssim/archive/1.1.1.tar.gz')
		.cmd('make DESTDIR=' + tmp + (process.platform === 'darwin' ? '/ USE_COCOA=1' : '/'))
		.run(function (err) {
			assert(!err);
			assert(fs.statSync(path.join(tmp, 'dssim')).isFile());
			cb();
		});
});

it('return path to binary and verify that it is working', function (cb) {
	binCheck(require('../'), function (err) {
		assert(!err);
		cb();
	});
});
