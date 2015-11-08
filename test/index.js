var postcss = require('postcss');
var expect  = require('chai').expect;
var fs = require('fs');

var plugin = require('..');

var test = function (input, output, opts) {
  opts = opts || {};
  var css = postcss(plugin(opts)).process(input).css;
  expect(css).to.eql(output);
};

function f(name) {
  var fullName = 'test/fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8');
}

describe('postcss-initial', function () {
  it('simple properties', function () {
    test(
      f('simple'),
      f('simple.expected')
    );
  });
  it('combined properties', function () {
    test(
      f('combined'),
      f('combined.expected')
    );
  });
  it('unknown properties', function () {
    test(
      f('unknown'),
      f('unknown.expected')
    );
  });
  it('all:initial - default styles', function () {
    test(
      f('all-initial-default'),
      f('all-initial-default.expected')
    );
  });
  it('all:initial - only inherited', function () {
    test(
      f('all-initial-inherited'),
      f('all-initial-inherited.expected'),
      { reset: 'inherited' }
    );
  });
  it('simple properties - replaced', function () {
    test(
      f('simple-replace'),
      f('simple-replace.expected'),
      { replace: true }
    );
  });
});
