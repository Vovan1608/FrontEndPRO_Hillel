// "use strict";

/*

*/


//! 1. ARRAY
var arr = [1, 2, 3, 4, 5, 6];

console.log( _.fill([1, 2, 3, 4, 5, 6], "*", 2, 4) ); // [ 1, 2, "*", "*", 5, 6 ]

console.log( _.fromPairs([['a', 1], ['b', 2]]) ); // => { 'a': 1, 'b': 2 }

console.log( _.nth(arr, 3)); // 4 --> arr[3]

var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array); // => [1, 3]

console.log(evens); // => [2, 4]

//! 2. COLLECTION

_.forEach({ 'a': 1, 'b': 2, 'c': 52, 'y': 200 }, function(value, key) {
  console.log(value, key);
}); // =>1 'a',  2'b', 52 c, 200 y

console.log(_.size("myNameVladymyr")); // 14
console.log(_.size({a: [1, 2, 3, 4], b: 25, c: true})); // 3

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

console.log(_.sortBy(users, ['user', 'age']));

//! 3. DATE

_.defer(function(stamp) {
  console.log(_.now() - stamp, "_.defer");
}, _.now());

//! 4. FUNCTION

_.delay(function(text) {
  console.log(text, "_.delay");
}, 1000, 'later');

var say = _.rest(function(what, names) {
  return what + ' ' + _.initial(names).join(', ') +
    (_.size(names) > 1 ? ' & ' : '') + _.last(names);
});

var say = say('hello', 'fred', 'barney', 'pebbles');
console.log(say); // hello fred, barney & pebbles

//! 5. LANG

var object = { 'a': 1 };
var other = { 'a': 1 };

console.log(_.isEqual(object, other)); // => true


var object = { 'a': 1, 'b': 2 };

console.log(_.isMatch(object, { 'b': 2 })); // => true

console.log(_.isMatch(object, { 'b': 1 })); // => false

console.log(_.toArray({ 'a': 1, 'b': 2 })); // => [1, 2]

console.log(_.toArray('abc')); // => ['a', 'b', 'c']

console.log(_.toArray(1)); // => []

console.log(_.toArray(null)); // => []

//! 6. MATH

console.log(_.max([4, 2, 98, 6])); // => 8


var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

var sum = _.sumBy(objects, function(o) { return o.n; }); // => 20
console.log(sum);

//! 7. NUMBER

console.log(_.random(0, 5)); // => an integer between 0 and 5

console.log(_.random(5)); // => also an integer between 0 and 5

console.log(_.random(5, true)); // => a floating-point number between 0 and 5

console.log(_.random(1.2, 5.2)); // => a floating-point number between 1.2 and 5.2

//! 8.OBJECT

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

var merg = _.merge(object, other);
console.log(merg); // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

//! 9. STRING
console.log(_.parseInt('08')); // => 8

console.log(_.map(['6', '08', '10'], _.parseInt)); // => [6, 8, 10]

//! 10. UTIL

console.log(_.range(4)); // => [0, 1, 2, 3]

console.log(_.range(-4)); // => [0, -1, -2, -3]

console.log(_.range(1, 5)); // => [1, 2, 3, 4]