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
  var arr = array;
  var x = 0;
  var y = 0;
  var p = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < arr.length; i++) {
    x = arr[i];
    y = arr[i + 1];
    if (x * y > p) {
      p = x * y;
    };
  };
  return p;
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
