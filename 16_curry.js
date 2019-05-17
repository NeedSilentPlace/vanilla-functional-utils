/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curry = function curry(fn) {

  function doPartial(func, arr = []) {
    if(func.length <= arr.length) {
      return func.apply(this, arr);
    }

    function doNextPartial() {
      const args = Array.prototype.slice.call(arguments);
      return doPartial(func.bind(this, ...arr), args);
    }

    Object.defineProperty(doNextPartial, 'length', { value : func.length - arr.length });

    return doNextPartial;
  }

  return doPartial(fn);
};

export default curry;
