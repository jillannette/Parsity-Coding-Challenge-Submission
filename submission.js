const findSum = function(array) {
  let sum = 0;
    sum = array.reduce((acc, number) => acc + number);
  return sum;
};

const findFrequency = function(arr) {
  let compare = "";
  let mostFreq = "";
  let leastFreq = "";
  
  arr.reduce((acc, val) => {
    if(val in acc){               
       acc[val]++;                
    }else{
       acc[val] = 1;      
    }
    if(acc[val] > compare){   
                              
       compare = acc[val];    
       mostFreq = val;        
    }
    if(acc[val] < compare){

      compare = acc[val];
      leastFreq = val;
    }
    return acc;
  }, {})
  console.log(`most: '${mostFreq}', least: '${leastFreq}'`);
 };
let data = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];


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
  phrase = str.replace(/ *\([^)]*\) */g, "").trim()
  return phrase;
};

const scoreScrabble = function(str) {
  str = str.toLowerCase();
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

  for (i = 0; i < str.length; i++) {
    sum += points[str[i]] || 0;
  }
  return sum;
};
