//A program to format phone numbers to a given format

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -> '(123) 456-7890'

function formatPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
