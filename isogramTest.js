//A program to find if the given string is an isogram. An isogram is a word without a repeating letter.

function isogramTest(input) {
  input = input.toLowerCase();
  input.split('').forEach(function(letter, i, string) {
    if(string.indexOf(letter, i+1) != -1 ) return false;
  });
  return true;
}

console.log(isogramTest('lumberjacks')); // -> true
