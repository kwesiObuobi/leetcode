/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // return s.trim().split(' ')[s.trim().split(' ').length - 1].length;

    let i  = s.length-1;
    while(i >= 0 && s[i] === ' ') {
      i--;
    }

    let count = 0;
    while (i >= 0 && s[i] !== ' ') {
      i--;
      count++;
    }
    return count;
};