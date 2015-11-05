# dssim-bin [![Build Status](http://img.shields.io/travis/fhemberger/dssim-bin.svg?style=flat)](http://travis-ci.org/fhemberger/dssim-bin)

> [dssim](https://github.com/pornel/dssim) is a tool to compute the (dis)similarity between two or more PNG images using an algorithm approximating human vision.
>
> Comparison is done using [the SSIM algorithm](https://ece.uwaterloo.ca/~z70wang/research/ssim/) (based on [Rabah Mehdi's implementation](http://mehdi.rabah.free.fr/SSIM/)) at multiple weighed resolutions.

## Install

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
