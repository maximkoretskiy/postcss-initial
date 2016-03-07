var postcss = require('postcss');
var makeFallbackFunction = require('./lib/rules-fabric');

module.exports = postcss.plugin('postcss-initial', function (opts) {
  opts = opts || {};
  opts.reset = opts.reset || 'all';
  opts.replace = opts.replace || false;
  var getFallback = makeFallbackFunction(opts.reset === 'inherited');
  return function (css) {
    css.walkDecls(function (decl) {
      if (decl.value !== 'initial') return;
      var fallBackRules = getFallback(decl.prop);
      if (fallBackRules.length === 0) return;
      fallBackRules.forEach(function (rule) {
        decl.cloneBefore(rule);
      });
      if (opts.replace === true) {
        decl.remove();
      }
    });
  };
});
