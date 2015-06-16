var assert = require('assert')
var test = require('testit')
var xorCrypt = require('../')

/**
 * Creates a random string.
 */
function randomString () {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

test('should encrypt', function () {
  assert.equal(xorCrypt('Hello World', 6), 'Ncjji&Qitjb')
})

test('should decrypt', function () {
  assert.equal(xorCrypt('Ncjji&Qitjb', 6), 'Hello World')
})

test('should function properly on a random string', function () {
  var original = randomString()
  var encrypted = xorCrypt(original)
  assert.equal(xorCrypt(encrypted), original)
})
