let nums = [2, 3, 1, 3, 4, 5, 3, 1];

// counts the number of times a value appears in the array
function sortedFrequency(arr, value) {
  let count = 0;
  arr.forEach((v) => v === value && count++);
  return count;
}

console.log(sortedFrequency(nums, 1));
