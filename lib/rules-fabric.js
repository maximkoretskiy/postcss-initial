var allRules = require('./rules.json');

function intersection(array1, array2) {
  return array1.filter( function (n) {
    return array2.indexOf(n) !== -1;
  });
}

function getRules(types, rules) {
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

function filterRules(types) {
  types = types || ['all'];
  return clearRules( getRules(types, allRules));
}

module.exports = filterRules;