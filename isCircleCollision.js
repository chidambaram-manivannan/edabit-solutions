// A program to check whether two circles are intersecting each other. 
//Two arrays are given as inputs in the order [radius of circle, X co-ordinate of center, Y co-ordinate of center]

function isCircleCollision(c1,c2){
  return Math.sqrt(Math.pow(c2[1] - c1[1], 2) + Math.pow(c2[2] - c1[2], 2)) <= c1[0] + c2[0];
}

console.log(isCircleCollision([1,0,0],[1,10,10])); // -> false
console.log(isCircleCollision([10,0,0],[10,10,10])); // -> true
