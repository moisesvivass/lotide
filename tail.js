// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
    return array.slice(0);
}

// TEST CODE

const word = ["Yo Yo", "Lighthouse", "Labs"]);
tail(words);
assertEqual(words.lenght, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

const songle = tail(["Solo"]);
console.log(single);

const empty = tail()
console.log(empty);