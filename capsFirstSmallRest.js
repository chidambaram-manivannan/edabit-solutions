//A program to capitalise the first letter of a given set of names. The remaining letters are converted to lower case.

function capMe(arr) {
	return arr.map(function(word) {
    return word.replace(/(\w)(\w*)/,function(_match, first, rest) {
      return first.toUpperCase() + rest.toLowerCase();
    });
  });
}

console.log(capME(['samuel', 'MABELLE', 'letitia', 'meridith'])); // -> ['Samuel', 'Mabelle', 'Letitia', 'Meridith']
