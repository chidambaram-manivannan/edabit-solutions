//A program to sort a given array of numbers. If the given argument is 'null', it return an empty array

function sortNumsAscending(arr) {
  if (arr == null) return [];
  return arr.sort(function(a,b) {
    return a - b;
  });
}

console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); // ->  [-95, -24, 4, 29, 80, 85]
