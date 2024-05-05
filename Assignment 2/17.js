/* Q17.Split a string into an array of words: */

function splitString(sentence) {
  return sentence.split(' ');
}

var sentence = 'Hello world, how are you?';
console.log(splitString(sentence));

/* Output:
['Hello', 'world,', 'how', 'are', 'you?']

 */