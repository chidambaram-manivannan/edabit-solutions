//A program to flatten a given array

/* Eg: console.log(flattenArray([1,2,3,[4,function(){return 5},6],'se7ven',8,9])); 
-> [ 1, 2, 3, 4, 5, 6, 'se7ven', 8, 9 ]
console.log(flattenArray()); --> []
*/

function flattenArray(array) {
  var arrayOut = [];
  function isArray(arr) {
    return typeof(arr) == 'object' && arr.length >= 1;
  }
  function pusher(array) {
    array.forEach(function(element) {
      if(isArray(element)) {pusher(element);}
    else {
      if (typeof(element) == 'function') element = element();
      arrayOut.push(element);
      }
    });
  }
  if(arguments.length >= 1) pusher (array);
  return arrayOut;
}

console.log(flattenArray([1,2,3,[4,function(){return 5},6],'se7ven',8,9]));
