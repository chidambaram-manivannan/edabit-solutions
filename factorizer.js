//A program to find all the prime factors of a given number

function isPrime(n) {
  for(var i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false; 
  return n !== 1;
}

function factorFinder(num) {
  var factors = [];
  if (num == 1) return factors;
  for(i = 2; ; i++) {
    if (!isPrime(i)) continue;
    if (!(num % i)) {
      factors.push(i);
      num /= i;
      break;
    }
  }
  return factors.concat(factorFinder(num));
}

console.log(factorFinder(17)); // -> [17]
console.log(factorFinder(32)); // -> [2, 2, 2, 2, 2]
console.log(factorFinder(35));// -> [5, 7]
