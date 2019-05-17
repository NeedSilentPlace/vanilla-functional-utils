/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 *
 */
var ap = function ap (list, item) {
  if(list instanceof Function && item instanceof Function) {
    return function (input) {
      return list(item(input));
    };
  }
  
  const result = [];

  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < item.length; j++) {
      result.push(list[i](item[j]));
    }
  }
  
  return result;
};

export default ap;
