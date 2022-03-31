const findSum = function(array) {
  let sum = 0;
    sum = array.reduce((acc, number) => acc + number);
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  str = str.toLowerCase();
    for (var i = 0; i <= (str.length / 2); i++) {
      if (str[i] != str[str.length - (i + 1)]) return false;
  }
      return true;
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
