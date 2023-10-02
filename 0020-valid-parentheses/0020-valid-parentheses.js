/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const hashBrackets = { ')':'(', '}':'{', ']':'[' }
  let stackBrackets = [];

  for (let c of s) {
    if (Object.values(hashBrackets).includes(c)) {
      stackBrackets.push(c);
    } else {
      if (stackBrackets.pop() !== hashBrackets[c]) {
        return false;
      }
    }
  }

  if (stackBrackets.length !== 0) return false;

  return true;
};