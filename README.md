# XOR-Crypt

[![Build Status](https://img.shields.io/travis/RobLoach/xor-crypt/gh-pages.svg)](http://travis-ci.org/RobLoach/xor-crypt "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/xor-crypt.svg)](https://npmjs.org/package/xor-crypt "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/xor-crypt.svg)](https://npmjs.org/package/xor-crypt "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/RobLoach/xor-crypt.svg)](https://david-dm.org/RobLoach/xor-crypt)
[![Dev Dependency Status](https://img.shields.io/david/dev/RobLoach/xor-crypt.svg)](https://david-dm.org/RobLoach/xor-crypt#info=devDependencies)

Simple XOR string encryption library.

## Install

### [NPM](http://npmjs.org/)
- Use: `require('xor-crypt')`
- Install: `npm install --save xor-crypt`

### [Browserify](http://browserify.org/)
- Use: `require('xor-crypt')`
- Install: `npm install --save xor-crypt`
- CDN URL: `//wzrd.in/bundle/xor-crypt@0.0.2`

### [Ender](http://ender.jit.su/)
- Use: `require('xor-crypt')`
- Install: `ender add xor-crypt`

### [Component](http://github.com/component/component)
- Use: `require('xor-crypt')`
- Install: `component install RobLoach/xor-crypt`

### [Bower](http://bower.io/)
- Use: `require('xor-crypt')`
- Install: `bower install xor-crypt`

## Usage

See the [XOR-Crypt demonstration](http://robloach.github.io/xor-crypt/) for a
live usage of XOR-Crypt.

``` javascript
var encrypted = xorCrypt('Hello World');
// Outputs: Ncjji&Qitjb

var decrypted = xorCrypt(encrypted);
// Outputs: Hello World

// Use your own XOR Key.
var encrypted = xorCrypt('Hello World', 9);
var decrypted = xorCrypt(encrypted, 9);
```

## Development

Install dependencies through [npm](http://npmjs.org):

    npm install

Test with [ESLint](http://eslint.org), [Mocha](http://mochajs.org) and [Mocha
JSDom](https://github.com/rstacruz/mocha-jsdom):

    npm test

Build `xor-crypt.min.js` with:

    npm run build

Tag and publish the new versions to [npm](http://npmjs.com) with [Semantic
Versioning](http://semver.org/):

    git tag 2.0.0
    git push origin 2.0.0
    npm publish

## History

[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/RobLoach/xor-crypt/blob/master/HISTORY.md#files)

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)
