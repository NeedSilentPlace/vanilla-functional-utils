/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> (a -> a) -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @example
 *
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 *
 */

var adjust = function adjust(fn, number, list) {
  const result = [];
  
  if(arguments.length === 1) {
    return function(index, item) {
      if(arguments.length === 1) {
        return function(input) {
          const array = Array.prototype.slice.call(input);

          for(let i = 0; i < array.length; i++) {
            if(i === index) {
              result.push(fn(array[i]));
            } else {
              result.push(array[i]);
            }
          }

          return result;
        };
      } else {
        const array = Array.prototype.slice.call(item);

        for(let i = 0; i < array.length; i++) {
          if(i === index) {
            result.push(fn(array[i]));
          } else {
            result.push(array[i]);
          }
        }
        
        return result;
      }
    }
  }
  
  if(arguments.length === 2) {
    return function(input) {
      const array = Array.prototype.slice.call(input);

      for(let i = 0; i < array.length; i++) {
        if(i === number) {
          result.push(fn(array[i]));
        } else {
          result.push(array[i]);
        }
      }

      return result;
    };
  }

  const array = Array.prototype.slice.call(list);

  for(let i = 0; i < array.length; i++) {
    if(i === number) {
      result.push(fn(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  
  return result;
};

export default adjust;
