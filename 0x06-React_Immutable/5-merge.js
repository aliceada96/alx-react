import { Map } from 'immutable';
//const { Map } = require('immutable');

export default function concatElements(page1, page2) {
    return page1.concat(page2);
}

export default function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}