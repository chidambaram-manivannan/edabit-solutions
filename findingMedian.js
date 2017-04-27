//A program to find the median of an array of numbers
function average(a,b) { //takes 2 numbers, returns a number
  return (a+b)/2;
}

function median(arr) { //takes an array, returns a number
  var sortedArray = arraySort(arr), medianIs;
  if(sortedArray.length%2) {
    medianIs = sortedArray[Math.floor(sortedArray.length/2)];
  } else {
    medianIs = average(sortedArray[sortedArray.length/2], sortedArray[(sortedArray.length/2)-1]);
  }
  return (Math.round(medianIs*100))/100;
}

function arraySort(arrayIn) { //takes an array, returns an array
  var sortedArray = [], minimum;
  while (arrayIn.length > 0) {
    minimum = Math.min.apply(null,arrayIn);
    sortedArray.push(minimum);
    arrayIn.splice(arrayIn.indexOf(minimum),1);
  }
  return sortedArray;
}

console.log(median([1,2,3,4,5,6,7]));
