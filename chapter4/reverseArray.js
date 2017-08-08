/*
 * Reversing an array

  Arrays have a method reverse, which changes the array
  by inverting the order in which its elements appear. 
  For this exercise, write two functions, reverseArray 
  and reverseArrayInPlace. The first, reverseArray, takes
  an array as argument and produces a new array that has 
  the same elements in the inverse order. The second, 
  reverseArrayInPlace, does what the reverse method does:
  it modifies the array given as argument in order to reverse
  its elements. Neither may use the standard reverse method.

  Thinking back to the notes about side effects and pure 
  functions in the previous chapter, which variant do you 
  expect to be useful in more situations? Which one is more
  efficient?

  // Your code here.
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
 */

function reverseArray(arrayToReverse) {
  var newArray = []
  for (var index = arrayToReverse.length - 1; index >= 0; index--) {
    newArray.push(arrayToReverse[index]);
  }
  return newArray
}

function reverseArrayInPlace(arrayToReverse) {
  var loop = arrayToReverse.length / 2
  for (var counter = 0; counter < loop; counter++) {
    var tempElm = arrayToReverse[counter]
    var indexFromEnd = arrayToReverse.length - counter -1 
    arrayToReverse[counter] = arrayToReverse[indexFromEnd]
    arrayToReverse[indexFromEnd] = tempElm
  }
}
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]