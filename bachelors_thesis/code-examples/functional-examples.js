//Pure functions example
var sum = 0;

//Impure
function add(a, b) {
  sum = a + b;
}

//Pure
function add(a, b) {
  var tmp = a + b;
  return tmp;
}

//Higher order functions example
//Functions can be placed in variables.
function add(a, b) {
  return a + b;
}

var thisFunc = add;
console.log(thisFunc);

//And also put in other variables.
var sameFunc = thisFunc;
console.log(sameFunc(1, 2)); //Will give the output 3.

//Functions can also be used as parameters or return values.
function applyFunc(f, a, b) {
  return f(a, b);
}
console.log(applyFunc(function(a, b) {
  return a * b;
}, 3, 2)); //Will give output of 6

//Returns a function that returns a string
function getStringCreator(category, unit) {
  return function(value) {
    return category + ': ' + value + unit;
  }
}

var weightStringCreator = getStringCreator('Weight', 'kg');
console.log(weightStringCreator(5));

//Recursive functions example
//Adds all numbers from start to end with a loop
function iterativeAdd(start, end) {
  var sum = 0;
  while(start <= end) {
    sum += start;
    start++;
  }

  return sum;
}
//Adds all numbers from start to end recursively
function recursiveAdd(start, end) {
  if (start == end) {
    return end;
  }
  else {
    return start + recursiveAdd(start + 1, end);
  }
}

console.log(iterativeAdd(1, 6));
console.log(recursiveAdd(1, 6));

//Currying example
//Returns a new function that takes the remaining argument or the sum of a and b
function addWithCurrying(a, b) {
  if(b) {
    return a + b;
  }
  else {
    return function(b) {
      return a + b;
    }
  }
}

var curryAdd = addWithCurrying(4);
console.log(curryAdd(6));
console.log(addWithCurrying(4, 6));

//JavaScript Object handling
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var obj = {
  text: 'Some text'
}

var arrayRef = array;
var objRef = obj;

// Gets references to original array and object.
console.log(arrayRef); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(objRef); // { text: 'Some text' }

// Change stuff
arrayRef.pop();
objRef.text = 'Some other text';

// Mutating new variables mutates original objects.
console.log(array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(obj); // { text: 'Some other text' }
