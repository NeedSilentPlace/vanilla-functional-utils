/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @example
 *
 *      const equals3 = (function (x) {
 *        return function (y) { return x === y; };
 *      })(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */

var all = function all (fn, list) {
  if(arguments.length === 1) {
    return function(input) {
      if(!input.length) {
        return true;
      }

      for(let i = 0; i < input.length; i++) {
        if(!fn(input[i])) {
          return false;
        }
      }
      
      return true;
    };
  }
  
  if(!list.length) {
    return true;
  }
  
  for(let i = 0; i < list.length; i++) {
    if(!fn(list[i])) {
      return false;
    }
  }

  return true;
};

export default all;
