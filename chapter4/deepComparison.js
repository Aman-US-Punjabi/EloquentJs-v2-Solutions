/*
 * Deep comparison

  The == operator compares objects by identity. But sometimes,
  you would prefer to compare the values of their actual properties.

  Write a function, deepEqual, that takes two values and returns
  true only if they are the same value or are objects with the same
  properties whose values are also equal when compared with a recursive 
  call to deepEqual.

  To find out whether to compare two things by identity
  (use the === operator for that) or by looking at their properties,
  you can use the typeof operator. If it produces "object" for both values,
  you should do a deep comparison. But you have to take one silly exception
  into account: by a historical accident, typeof null also produces "object".
  
 */

function deepEqual(firstValue, secondValue) {
  if (typeof firstValue == "object" && typeof secondValue == "object") {
    if((firstValue == null && secondValue != null) || (firstValue != null && secondValue == null)  ) {
      return false
    }
    
    var elementsInFrist = 0
    for (var elm in firstValue) {
      elementsInFrist++
    }
    var elementsInSecond = 0
    for (var elm in secondValue) {
      elementsInSecond++
    }
    console.log(elementsInFrist)
    console.log(elementsInSecond)
  }
  
  console.log(firstValue)
  console.log("Firstvalue property name: ")
  console.log(secondValue)
  console.log(secondValue.value)
  return firstValue === secondValue
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
/*
Exception: TypeError: firstValue.keys is not a function
deepEqual@Scratchpad/15:40:15
@Scratchpad/15:48:13
*/