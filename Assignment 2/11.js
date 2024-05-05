//Q11.Validate whether a given value is a number or not:

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

console.log(isNumber(5)); // Output: true
console.log(isNumber('hello')); // Output: false