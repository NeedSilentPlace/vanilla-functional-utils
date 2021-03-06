/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      const half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      const reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = function divide(arg1, arg2) {
  if(arguments.length === 1) {
    return function(input) {
      return Number(arg1) / Number(input);
    };
  } else {
    if(typeof arg1 !== 'function' && typeof arg2 !== 'function') {
      return Number(arg1) / Number(arg2);
    }

    if(typeof arg1 === 'function' && typeof arg2 !== 'function') {
      return function(input) {
        return Number(arg1(input)) / Number(arg2);
      };
    }

    if(typeof arg1 !== 'function' && typeof arg2 === 'function') {
      return function(input) {
        return Number(arg1) / Number(arg2(input));
      };
    }
    
    if(typeof arg1 === 'function' && typeof arg2 === 'function') {
      return function(firstInput, secondInput) {
        return Number(arg1(firstInput)) / Number(arg2(secondInput));
      };
    }
  }
};

export default divide;
