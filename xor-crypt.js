/*!
 * XOR Crypt v1.0.0 - http://github.com/RobLoach/xor-crypt
 * @license MIT
 *   http://opensource.org/licenses/MIT
 */

/**
 * Universal Module Definition
 *
 * @see {@link http://github.com/umdjs/umd}
 */
(function (root, factory) {
  'use strict'
  /* global define */
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.xorCrypt = factory()
  }
}(this, function () {
  'use strict'

  /**
   * Encrypt or decrypt a string with the given XOR key.
   *
   * @name xorCrypt
   * @param {string} str - The string to encrypt.
   * @param {int} [key=6] - The XOR key to use when encrypting.
   *
   * @return The resulting XOR'ed string.
   */
  return function xorCrypt (str, key) {
    var output = ''

    if (!key) {
      key = 6
    }

    for (var i = 0; i < str.length; ++i) {
      output += String.fromCharCode(key ^ str.charCodeAt(i))
    }

    return output
  }

}))
