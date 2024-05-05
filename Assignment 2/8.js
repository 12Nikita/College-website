//Q8.Sort the characters in a string alphabetically:

function sortStringAlphabetically(str) {
  return str.split('').sort().join('');
}

var string = "hello world";
console.log(sortStringAlphabetically(string)); // Output: " dehllloorw"