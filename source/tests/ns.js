
var assert = require('assert'),
  base = require('../lib/base');

console.log(base)
describe('Hello world', function () {
  it('says hello', function () {
    assert.equal(base.hello(), 'Hello world!')
  });
});