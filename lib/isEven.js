
/**
 * This function evaluates whether all parameters are even
 * @memberof variadic
 * @author scottwestover
 * @param {...*} params - One or more parameters.
 */
exports.isEven = (...params) => {
  for (const param of params) {
    // Only accept finite numbers
    if (Number.isNaN(parseFloat(param)) || !Number.isFinite(Number(param))) return false;
    // Only accept evens
    else if (param % 2 !== 0) return false;
  }
  return true;
};
