var postcss = require('postcss');
var rulesFabric = require('./lib/rules-fabric');

module.exports = postcss.plugin('postcss-all-unset', function (opts) {
  opts = opts || {};
  var resetRules = rulesFabric(opts.reset);
  return function (css) {
    css.walkDecls('all', function (decl) {
      if(decl.value !== 'unset') return;
      resetRules.forEach(function (rule) {
        decl.cloneBefore(rule);
      });
    });
  };
});
