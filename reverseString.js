//A program to reverse a given String

function reverse(str) {
  var reversedArray = [];
  str.split('').forEach(function(element){
    reversedArray.unshift(element);
  });
  return reversedArray.join('');
}

console.log(reverse('A reversed string!'));
