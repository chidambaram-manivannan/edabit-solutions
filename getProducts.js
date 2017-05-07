//A program that maps the elements of an array with the product of all other elements in the array

function getProducts(arr) {
  return arr.map(function(number,i,array) {
    var product = 1;
    for(var j = 0; j < array.length; j++)
      if(j != i) product *= array[j];
    return product;
  });
}

console.log(getProducts([1, 7, 3, 4])); // -> [ 84, 12, 28, 21 ]
