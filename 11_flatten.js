/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */

var flatten = function(list) {
  if(Array.isArray(list)) {
    return repeat(list);
  }
  
  const array = [];
  
  for(let key in list) {
    if(list.hasOwnProperty(key)) {
      if(Array.isArray(list[key])) {
        array.push(list[key]);
      }
    }
  }

  return repeat(array);

  function repeat(arr) {
    let isFlat = true;
    const result = [];
    
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        result.push(...arr[i]);
      } else {
        result.push(arr[i])
      }
    }

    for(let j = 0; j < result.length; j++) {
      if(Array.isArray(result[j])) {
        isFlat = false;
        break;
      }
    }

    if(!isFlat) {
      return repeat(result);
    }

    return result;
  }
};

export default flatten;
