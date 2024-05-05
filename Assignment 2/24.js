//Q24.Use a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string:

var jsonString = '{"name": "John", "age": }';

try {
  var jsonData = JSON.parse(jsonString);
  console.log(jsonData);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log('Invalid JSON string');
  } else {
    console.log('An error occurred:', error.message);
  }
}

/* Output: 
Invalid JSON string*/