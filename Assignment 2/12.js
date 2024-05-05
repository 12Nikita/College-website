//Q12.Validate whether a given value is a RegExp or not:

function isRegExp(value) {
  return value instanceof RegExp;
}

console.log(isRegExp(/test/)); // Output: true
console.log(isRegExp('hello')); // Output: false