/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */

var add = function add(arg1, arg2) {
  if(arguments.length === 1) {
    return function(input) {
      return Number(arg1) + Number(input);
    };
  } else {
    if(typeof arg1 !== 'function' && typeof arg2 !== 'function') {
      return Number(arg1) + Number(arg2);
    }

    if(typeof arg1 === 'function' && typeof arg2 !== 'function') {
      return function(input) {
        return Number(arg1(input)) + Number(arg2);
      };
    }

    if(typeof arg1 !== 'function' && typeof arg2 === 'function') {
      return function(input) {
        return Number(arg1) + Number(arg2(input));
      };
    }
    
    if(typeof arg1 === 'function' && typeof arg2 === 'function') {
      return function(firstInput, secondInput) {
        return Number(arg1(firstInput)) + Number(arg2(secondInput));
      };
    }
  }
};

export default add;
