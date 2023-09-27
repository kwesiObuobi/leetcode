/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] + 1 !== 10) {
      digits[digits.length-1] = digits[digits.length-1] + 1;
      return digits;
  }
    
  let i = 1;
  while(digits[digits.length - i] + 1 === 10) {
    digits[digits.length - i] = 0;
    i++;
  }

  if (i > digits.length) {
    digits.unshift(1)
  } else {
    digits[digits.length-i] = digits[digits.length-i] + 1;
  }

  return digits;
};