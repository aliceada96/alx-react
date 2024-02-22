const Immutable = require('immutable');

function accessImmutableObject(object, array) {
  const immutableMap = Immutable.fromJS(object);
  const result = immutableMap.getIn(array);

  if (typeof result === 'string' || result === undefined || Immutable.Map.isMap(result)) {
    return result;
  }

  return undefined;
}

module.exports = accessImmutableObject;
