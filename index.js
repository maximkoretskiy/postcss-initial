var postcss = require('postcss');
var resetRules = require('./lib/resetRules');

module.exports = postcss.plugin('postcss-all-unset', function () {
  return function (css) {
    css.walkDecls('all', function (decl) {
      if(decl.value === 'unset') {
        resetRules.forEach(function (rule) {
          decl.cloneBefore(rule);
        });
      }
    });
  };
});
