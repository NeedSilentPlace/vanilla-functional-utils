/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = function is(ctor, val) {
  if(arguments.length === 1) {
    return function(input) {
      if(input !== Object(input)) {
        if(input === null || input === undefined) {
          return false;
        }
        return input.constructor === ctor;
      } else {
        return input instanceof ctor;
      }
    };
  } else {
    if(val !== Object(val)) {
      if(val === null || val === undefined) {
        return false;
      }
      return val.constructor === ctor;
    } else {
      return val instanceof ctor;
    }
  }
};

export default is;
