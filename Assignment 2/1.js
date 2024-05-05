/* Q1.Find all the index positions of a given word within a given string: */
function findWordIndices(str, word) {
  var indices = [];
  var index = str.indexOf(word);
  while (index !== -1) {
    indices.push(index);
    index = str.indexOf(word, index + 1);
  }
  return indices;
}

var string = "hello world hello";
var word = "hello";
console.log(findWordIndices(string, word)); // Output: [0, 6]