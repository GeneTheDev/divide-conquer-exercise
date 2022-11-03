let findZeros = [1, 1, 1, 1, 0, 0];

// Counts how many zeroes in array
function CountZeroes(arr, val) {
  return arr.filter((v) => v === val).length;
}

console.log(CountZeroes(findZeros, 0));
