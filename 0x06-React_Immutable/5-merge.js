import { List, Map } from 'immutable';

const concatElements = (page1, page2) {
    return List(page1).concat(List(page2));
}

const mergeElements = (page1, page2) {
    return Map(page1).concat(Map(page2));
}

export { concatElements, mergeElements };
