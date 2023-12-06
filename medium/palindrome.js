/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split('').filter(ch => /[a-zA-Z]/.test(ch)).join('');
  let temp = str.split('').reverse().join('');

  return str === temp;
}

module.exports = isPalindrome;
