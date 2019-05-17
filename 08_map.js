/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = function map(fn, list) {
  if(arguments.length === 1) {
    return function(input) {
      if(Array.isArray(input)) {
        if(!input.length) {
          return x;
        }

        return input.map(item => fn(item));
      } else {
        const result = {};

        for(let key in input) {
          if(input.hasOwnProperty(key)) {
            result[key] = fn(input[key]);
          }
        }
        
        return result;
      }
    };
  }

  if(list instanceof Function) {
    return function(input) {
      return fn(list(input));
    };
  }
  
  if(Array.isArray(list)) {
    return list.map(item => fn(item));
  } else {
    const result = {};

    for(let key in list) {
      if(list.hasOwnProperty(key)) {
        result[key] = fn(list[key]);
      }
    }

    return result;
  }
};

export default map;
