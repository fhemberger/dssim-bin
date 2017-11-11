# dssim-bin [![Build Status](http://img.shields.io/travis/fhemberger/dssim-bin.svg?style=flat)](http://travis-ci.org/fhemberger/dssim-bin) ![Current Version](https://img.shields.io/npm/v/dssim-bin.svg)

> [dssim](https://github.com/pornel/dssim) is a tool to compute the (dis)similarity between two or more PNG images using an algorithm approximating human vision.
>
> Comparison is done using [the SSIM algorithm](https://ece.uwaterloo.ca/~z70wang/research/ssim/) (based on [Rabah Mehdi's implementation](http://mehdi.rabah.free.fr/SSIM/)) at multiple weighed resolutions.

### Important Notes
- The npm package version doesn't follow [semver](http://semver.org/) but matches the `dssim` binary versions instead.
- [dssim@2.8.0](https://github.com/pornel/dssim/releases/tag/2.8.0) is a complete rewrite in Rust and is currently not supported. If you can help me setting up a build pipeline on Travis CI with precompiled binaries for Linux, Windows and macOS for this package, please open a PR.


## Install

To compile dssim, `pkg-config` needs to be installed first (e.g. via `apt-get install pgk-config` on Debian/Ubuntu or via [Homebrew](http://brew.sh/)'s `brew install pkg-config` command on OS X).

```
$ npm install --save dssim-bin
```


## Usage

```js
var execFile = require('child_process').execFile;
var dssim = require('dssim-bin');

var args = [
    // ...
];

execFile(dssim, args, function (err) {
    console.log('Image minified');
});
```


## CLI

```
$ npm install --global dssim-bin
```

```
$ dssim --help
```


## License

[MIT](LICENSE.txt)
