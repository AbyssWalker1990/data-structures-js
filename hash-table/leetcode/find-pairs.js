function findPairs(nums1, nums2, target) {
  const nums1Set = new Set();
  const pairs = [];

  nums1.forEach((num) => nums1Set.add(num));

  nums2.forEach((num) => {
    const complement = target - num;

    if (nums1Set.has(complement)) {
      pairs.push([complement, num]);
    }
  });

  return pairs;
}

// -------------------
// Single Pair Matching
// -------------------
console.log("Single Pair Matching:");
console.log("Input: [1, 2, 3], [4, 5, 6], 7");
console.log("Output: ", findPairs([1, 2, 3], [4, 5, 6], 7));
console.log("---------------");

// // -------------------
// // Multiple Pairs
// // -------------------
// console.log("Multiple Pairs:");
// console.log("Input: [1, 2, 3], [7, 6, 5], 8");
// console.log("Output: ", findPairs([1, 2, 3], [7, 6, 5], 8));
// console.log("---------------");

// // -------------------
// // No Matching Pairs
// // -------------------
// console.log("No Matching Pairs:");
// console.log("Input: [1, 2, 3], [7, 8, 9], 5");
// console.log("Output: ", findPairs([1, 2, 3], [7, 8, 9], 5));
// console.log("---------------");

// // -------------------
// // Empty Arrays
// // -------------------
// console.log("Empty Arrays:");
// console.log("Input: [], [], 10");
// console.log("Output: ", findPairs([], [], 10));
// console.log("---------------");

// // -------------------
// // One Empty Array
// // -------------------
// console.log("One Empty Array:");
// console.log("Input: [1, 2, 3], [], 4");
// console.log("Output: ", findPairs([1, 2, 3], [], 4));
// console.log("---------------");
