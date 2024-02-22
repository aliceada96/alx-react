import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
    const map1 = Map(page1);
    const map2 = Map(page2);    
    const mergedMap = map1.mergeWith((oldVal, newVal) => {
      if (Map.isMap(oldVal) && Map.isMap(newVal)) {
        return mergeDeeplyElements(oldVal.toJS(), newVal.toJS());
      } else {
        return newVal;
      }
    }, map2);   
    return mergedMap;
}
