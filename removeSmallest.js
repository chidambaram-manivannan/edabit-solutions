//A program to remove the smallest number in a given array

function removeSmallest(arr) {
  var lowest = Math.min.apply(null, arr);
  arr.splice(arr.indexOf(lowest),1);
  return arr;
}
