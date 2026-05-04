function merge(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));

  return merge(left, right);
}

let originalArray = [3, 1, 4, 2];
let sortedArray = mergeSort(originalArray);

console.log("Original Array:", originalArray);
console.log("\nSorted Array:", sortedArray);

/*
    EXPECTED OUTPUT:
    ----------------
    Original Array: [ 3, 1, 4, 2 ]

    Sorted Array: [ 1, 2, 3, 4 ]

*/
