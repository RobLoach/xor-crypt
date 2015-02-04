
<!-- TITLE/ -->

# XOR Crypt

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/RobLoach/xor-crypt/master.svg)](http://travis-ci.org/RobLoach/xor-crypt "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/xor-crypt.svg)](https://npmjs.org/package/xor-crypt "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/xor-crypt.svg)](https://npmjs.org/package/xor-crypt "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/RobLoach/xor-crypt.svg)](https://david-dm.org/RobLoach/xor-crypt)
[![Dev Dependency Status](https://img.shields.io/david/dev/RobLoach/xor-crypt.svg)](https://david-dm.org/RobLoach/xor-crypt#info=devDependencies)<br/>


<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Simple XOR string encryption library.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

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

<!-- /INSTALL -->


## Usage

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

Update project documentation with [Projectz](https://github.com/bevry/projectz):

    npm run projectz

Build `xor-crypt.min.js` with:

    npm run build

Tag and publish the new versions to [npm](http://npmjs.com) with [Semantic
Versioning](http://semver.org/):

    git tag 2.0.0
    git push origin 2.0.0
    npm publish


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/RobLoach/xor-crypt/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)

Copyright &copy; Rob Loach (http://github.com/RobLoach)

<!-- /LICENSE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Rob Loach (https://github.com/RobLoach)

### Sponsors

No sponsors yet! Will you be the first?



### Contributors

These amazing people have contributed code to this project:

- [Rob Loach](https://github.com/RobLoach) — [view contributions](https://github.com/RobLoach/xor-crypt/commits?author=RobLoach)

[Become a contributor!](https://github.com/RobLoach/xor-crypt/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


