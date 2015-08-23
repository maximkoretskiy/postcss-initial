var postcss = require('postcss');
var expect  = require('chai').expect;
var fs = require('fs');

var plugin = require('..');

var test = function (input, output) {
  var css = postcss(plugin).process(input).css;
  console.log('css', css);
  expect(css).to.eql(output);
};

function f(name) {
  var fullName = 'test/fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8');
}

describe('postcss-all-unset', function () {
  it('sets width and height', function () {
    test(f('simple'), f('simple.expected'));
  });
});
