var exercises = {},
tempArray,
currentNum,
waldo,
_ = require("../node_modules/lodash/lodash");

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
  var args = arguments;
  _.each(args, function(num) {
    if (num.indexOf("waldo") !== -1) {
      waldo = num;
    }
  });
  return waldo;
};

// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()
exercises.largestNums = function(arrayOfNumberArrays) {
  currentNum = 0;
  tempArray = arrayOfNumberArrays;
  currentNum = _.chain(tempArray)
    .map(function(array) {
      return _.max(array);
    })
    .value();
  return currentNum;
};

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
  // TODO: implement me
};

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()
// exercises.TODO = function(array) {
// };

module.exports = exercises;
