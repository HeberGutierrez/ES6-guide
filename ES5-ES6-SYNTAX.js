//JUST A LITTLE GUIDE WITH EXAMPLES FOR USING ES6


//DESTRUCTURING (WITH OBJECTS)

//ES5 SYNTAX

var user = {
  first: 'Benji',
  last: 'Marinacci',
  age: 32
};

var greet = function(person) {
  var first = person.first;
  var last = person.last;

  console.log('Hi, ' + first + ' ' + last);
};

greet(user); //'Hi, Benji Marinacci'


//ES6 SYNTAX

var user = {
  first: 'Benji',
  last: 'Marinacci',
  age: 32
};

var greet = function({
  first,
  last
}) {
  console.log('Hi, ' + first + ' ' + last);
};

greet(user); //'Hi, Benji Marinacci'

/****************************************************/

//SPREAD OPERATOR

//ES5

var someFunction(a, b, c, d) {
  //do something with a, b ,c, and d
};

var args = [1, 2, 4, 16];

someFunction.apply(null, args);


//ES6
var someFunction(a, b, c, d) {
  //do something with a, b ,c, and d
};

var args = [1, 2, 4, 16];

someFunction(...args);

/* The spread operator allows you to expand multiple elements of an
array. This is useful when you need to pass an array of values as
an argument to a function wich does not accept arrays. */

/******************************************************************/


//REST PARAMETERS

//ES5
var multiplyByNum = function(x) {
    var nums = Array.prototype.slice.call(arguments, 1);
    nums.forEach(function(num) {
      console.log(x * num);
    })
  },

  //ES6
  var multiplyByNum = function(x, ...nums) {
    nums.forEach(function(num) {
      console.log(x * num);
    })
  };

/*Rest parameters allow you to  capture any number of unnamed someFunction
parameters into an array. this reduces the complexity involved in manipulating
the arguments pseudo-array.*/

/*****************************************************************/


//DEFAULT PARAMETERS

//ES5
var generateAddress = function(city, state, country) {
  country = country === undefined ? 'USA' : country;
  return city + ', ' + state.toUpperCase() + ', '
  country;
};

generateAddress('Oakland', 'CA'); //=> 'Oakland, CA, USA'
generateAddress('Calgary', 'AB', 'Canada'); //=> 'Calgary, AB, Canada'

//ES6
var generateAddress = function(city, state, country = 'USA') {
  return city + ', ' + state.toUpperCase() + ', '
  country;
};

generateAddress('Oakland', 'CA'); //=> 'Oakland, CA, USA'
generateAddress('Calgary', 'AB', 'Canada'); //=> 'Calgary, AB, Canada'

//ES6 supports supplying defaul values for function parameters within the function signature.

/**********************************************************************/


//TEMPLATE LITERALS

//ES5
var generateAddress = function(city, state, country) {
  country = country === undefined ? 'USA' : country;
  return city + ', ' + state.toUpperCase() + ', ' + country;
};

//ES6
var generateAddress = function(city, state, country = 'USA') {
  return city + ', ' + state.toUpperCase() + ', ' + country;
};

/*Template literals simplify working with strings that include references
to variables. They're also known by the name "template strings." Instead
of concatenating strings using the + operator...*/

//ES5

var generateAddress = function(city, state, country) {
  country = country === undefined ? 'USA' : country;
  return city + ', ' + state.toUpperCase() + ', ' + country;
};

var generateAddress = function(city, state, country = 'USA') {
  return `${city}, ${state.toUpperCase()}, ${country}`;
};

/*... we can embed variables directly into strings using the ${} operator.
It's important to note....
that template literals are denoted by backticks ( `` ), and not single or double-quotes.
*/


/******************************************************************************/

//TEMPLATE LITERALS (MULTIPLE LINES)

//ES5
var html = [
  '<div>',
  ' <span>',
  message,
  ' </span>',
  '</div>'
].join('\n');

//ES6
var html =
  `<div>
  <span>
    ${message}
  </span>
</div>`

//Tempalte literals improve the experience of working with strings wich
//contain multiple lines or whitespace.


/*********************************************************************************/

//ARROW FUNCTION EXPRESSIONS

//ES5
var mutiplier = function(x, y) {
  return x * y;
}

//ES6
var multiplier = (x, y) => {
  return x * y;
}

//ES6 ALSO WORKS
var mutiplier = (x, y) => x * y;


/*Arrow functions offer a new syntax for writing function expressions. Instead of
using the function keyword before defining some paremeters, you can use a 'fat arrow'
after the parametes.

If the function body contains only one expression, you may omit the curly braces
and the return keyword, writing the entire function on one line.*/

//ES5
var doubler = function(num) {
  return 2 * num;
}

//ES6
var doubler = num => 2 * num;

/*If a function expects exactrly one named parameter, you may omit the parentheses
around that parameter*/

//ES5
var doubleValues = function(values) {
  return values.map(function(value) {
    return value * 2;
  });
};

//ES6
var doubleValues = function(values) {
  return values.map(value => value * 2);
};

//This abbreviated function syntax works nicely with higher order functions

//ES6 also works
var doubleValues = values => values.map(value => value * 2);

//We can refactor our ES6 version of doubleValues to be even more concise.

/******************************************************************************/


//ARROW FUNCTIONS AND THE KEYWORD this

//ES5
var Delay = function(dela, reaction) {
  this.delay = delay;
  this.reaction = reaction;
};

Delay.prototype.haveReaction = function() {
  setTimeout(function() {
    console.log(this.reaction);
  }.bind(this), this.delay);
};

//ES6
var Delay = function(delay, reaction) {
  this.delay = delay;
  this.reaction = reaction;
};

Delay.prototype.haveReaction = function() {
  setTimeout(() => {
    console.log(this.reaction);
  }, this.delay);
};

/*In addition to theri concise syntax, arrow functions offer advantages when
working with JS in an object-oriented way. Consider the ES5 on the left.
Because setTimeout invokes its callback as a free function invocation,
any reference to the keyword this inside that callback will refer to the global
context. We've learned a few ways to address this problem.

One way is to use a closure variable to capture a reference to our desired context.

Alternatively, we could use the bind method.

Arrow function expressions do not create theri own this value. References to the
keyword this inside an arrow function expression will evaluate to the enclosing
context's this value.

/*******************************************************************************/


//FOR...OF LOOP

//ES5
var nums = [1, 4, 6, 7];

for (var i = 0; i < nums.lenght; i++) {
  console.log(nums[i]);
}

var string = 'hello world';

for (var j = 0; j < string.length; j++) {
  console.log(string[j]);
}

//ES6
var nums = [1, 4, 6, 7];

for (var val of nums) {
  console.log(val);
}

for (var letter of 'hello world') {
  console.log(letter);
}


/*In ES6, some collections (like Arrays, Sets, and Maps) are considered to be
'iterable'. You can use the for ... of loop to iterate over every value stored
in these kinds of collections.*/