// This program determines if there are equal number of Xs and Os (case insensitive) in a given string.

function XO(str) {
  var x = str.match(/X/gi), o = str.match(/O/gi);
  if (x && o) return x.length === o.length;
  if (x == null && o == null) return true;
  return false;
}

console.log(XO('moOxX')); //-> true
