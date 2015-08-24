var postcss = require('postcss');
var rulesFabric = require('./lib/rules-fabric');

module.exports = postcss.plugin('postcss-all-unset', function (opts) {
  opts = opts || {};
  opts.reset = opts.reset || 'all';
  var resetSubset = opts.reset === 'inherited' ? ['inherited'] : ['all'];
  var resetRules = rulesFabric(resetSubset);
  return function (css) {
    css.walkDecls('all', function (decl) {
      if(decl.value !== 'unset') return;
      resetRules.forEach(function (rule) {
        decl.cloneBefore(rule);
      });
    });
  };
});
