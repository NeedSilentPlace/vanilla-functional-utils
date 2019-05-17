// import { runInDebugContext } from "vm";

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
export default function compose (...fn) {
  if(!fn.length) {
    throw new Error('compose requires at least one argument');
  }

  return function() {
    let result = fn[fn.length - 1].apply(this, arguments);
    
    for(let i = fn.length - 2; i >= 0; i--) {
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
