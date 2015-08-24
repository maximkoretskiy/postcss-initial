var postcss = require('postcss');
var rulesCollection = require('./lib/resetRules');

function intersection(array1, array2) {
  return array1.filter( function (n) {
    return array2.indexOf(n) !== -1;
  });
}

function getRules(types, rules) {
  types = types || ['all'];
  if( types.indexOf('all') !== -1 ) {
    return rules;
  }
  return rules.filter( function (rule) {
    return rule.type !== undefined && intersection(rule.type, types).lenght;
  });
}

function clearRules(rules) {
  return rules.map(function (rule) {
    return {
      prop:  rule.prop,
      value: rule.value
    };
  });
}

module.exports = postcss.plugin('postcss-all-unset', function (opts) {
  opts = opts || {};
  var resetRules = clearRules(getRules(opts.reset, rulesCollection));
  return function (css) {
    css.walkDecls('all', function (decl) {
      if(decl.value !== 'unset') return;
      resetRules.forEach(function (rule) {
        decl.cloneBefore(rule);
      });
    });
  };
});
