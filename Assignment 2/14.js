/* Q14.Display the reading status of books: */
 
  var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger   Games',
    readingStatus: false
  }
];

library.forEach(function(book) {
  console.log(book.title + ' by ' + book.author + ' - Reading status: ' + (book.readingStatus ? 'Finished' : 'Not finished'));
}); 

/* Output:
The Road Ahead by Bill Gates - Reading status: Finished
Walter Isaacson by Steve Jobs - Reading status: Finished
Mockingjay: The Final Book of The Hunger Games by Suzanne Collins - Reading status: Not finished
 */