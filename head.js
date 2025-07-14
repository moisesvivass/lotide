// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
    return array[0];
}


// test

assertEqual(head([55]), 55);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([true, false, true]), true);  
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");