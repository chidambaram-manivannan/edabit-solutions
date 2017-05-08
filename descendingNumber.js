//A program to arrange a given number in descending order of its digits.

function sortDescending(num) {  //takes a number, returns a number
  return Number(num.toString().split('').map(function(char) {
    return Number(char);
  }).sort(function(a,b) {
    return b - a;
  }).join(''));
}

console.log(sortDescending(123456789)); // -> 987645321
