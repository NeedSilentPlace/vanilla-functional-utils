/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
export default function pipe(...fn) {
  if(!fn.length) {
    throw new Error('pipe requires at least one argument');
  }
  
  return function() {
    let result = fn[0].apply(this, arguments);

    for(let i = 1; i < fn.length; i++) {
      result = fn[i].call(this, result);
    }

    if(!(result instanceof Function)) {
      return result;
    } else {
      return function(input) {
        return result(input);
      };
    }
  }
}
