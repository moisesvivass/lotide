// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

// 1. Comparing identical strings
assertEqual("hello", "hello"); // ✅ 

// 2. Comparing non-identical strings
assertEqual("hello", "hola"); // ❌ 

// 3. Comparing identical numbers
assertEqual(100, 100); // ✅ 

// 4. Comparing non-identical numbers
assertEqual(5, 10); // ❌ 

