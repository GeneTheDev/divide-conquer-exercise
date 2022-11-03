let arr = [1, 2, 4, 6, 10, 12, 14];
let n = arr.length;
let x = 7;
let index = floorSearch(arr, n - 1, x);
if (index == -1) document.write("Floor of " + x + " doesn't exist in array ");
else document.write("Floor of " + x + " is " + arr[index]);

function floorSearch(arr, n, x) {
  if (x >= arr[n - 1]) return n - 1;
  if (x < arr[0]) return -1;
  for (let i = 1; i < n; i++) if (arr[i] > x) return i - 1;
  return -1;
}
