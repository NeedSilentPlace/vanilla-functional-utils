/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      const double = R.multiply(2);
 *      const triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = function multiply (arg1, arg2) {
  if(arguments.length === 1) {
    return function(input) {
      return Number(arg1) * Number(input);
    };
  } else {
    if(typeof arg1 !== 'function' && typeof arg2 !== 'function') {
      return Number(arg1) * Number(arg2);
    }

    if(typeof arg1 === 'function' && typeof arg2 !== 'function') {
      return function(input) {
        return Number(arg1(input)) * Number(arg2);
      };
    }

    if(typeof arg1 !== 'function' && typeof arg2 === 'function') {
      return function(input) {
        return Number(arg1) * Number(arg2(input));
      };
    }
    
    if(typeof arg1 === 'function' && typeof arg2 === 'function') {
      return function(firstInput, secondInput) {
        return Number(arg1(firstInput)) * Number(arg2(secondInput));
      };
    }
  }
};

export default multiply;
