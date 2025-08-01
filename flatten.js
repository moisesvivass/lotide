const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      
      for (let nested of item) {
        result.push(nested);
      }
    } else {
      
      result.push(item);
    }
  }

  return result;
};

// Test
console.log(flatten([1, 2, [3, 4], 5, [6]]));
 [1, 2, 3, 4, 5, 6]



