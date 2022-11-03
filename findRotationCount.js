function findRotationCount(arr, n) {
  let min = arr[0],
    min_index = 0;
  for (let i = 0; i < n; i++) {
    if (min > arr[i]) {
      min = arr[i];
      min_index = i;
    }
  }
  return min_index;
}
