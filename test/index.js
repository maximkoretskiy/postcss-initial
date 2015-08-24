var postcss = require('postcss');
var expect  = require('chai').expect;
var fs = require('fs');

var plugin = require('..');

var test = function (input, output, opts) {
  opts = opts || {};
  var css = postcss(plugin(opts)).process(input).css;
  console.log('css', css);
  expect(css).to.eql(output);
};

function f(name) {
  var fullName = 'test/fixtures/' + name + '.css';
  return fs.readFileSync(fullName, 'utf8');
}

describe('postcss-all-unset', function () {
  it('Insert default styles', function () {
    test(
      f('default'),
      f('default.expected')
    );
  });
  it('Insert subseted styles - only inherited', function () {
    test(
      f('inherited'),
      f('inherited.expected'),
      { reset: ['inherited'] }
    );
  });
});
