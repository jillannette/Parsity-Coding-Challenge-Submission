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
  let sentence = 'ido(not)liketocode';
  let newSentence = sentence.split('');
    newSentence.splice(3, 5);
  return newSentence.join('');
};

const scoreScrabble = function(str) {
  string = string.toLowerCase();
  let points = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,
},
sum = 0; 

  for (i = 0; i < string.length; i++) {
    sum += points[string[i]] || 0;
  }
  return sum;
};
