import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
    return List([Map(page1), Map(page2)].flatten(true));
}
