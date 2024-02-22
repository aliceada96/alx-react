import { fromJS } from 'immutable';

function getImmutableObject(object) {
  return fromJS(object);
}

const immutableMap = getImmutableObject(object);
