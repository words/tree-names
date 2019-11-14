'use strict'

var assert = require('assert')
var test = require('tape')
var trees = require('.')

test('tree-names', function(t) {
  t.ok(Array.isArray(trees), 'should be an `array`')

  t.doesNotThrow(function() {
    trees.forEach(function(tree) {
      assert.strictEqual(
        typeof tree,
        'string',
        '`' + tree + '` should be a string'
      )
    })
  }, 'should be `string`s')

  t.end()
})
