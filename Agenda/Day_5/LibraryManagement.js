/*A library management system needs to store the book details and show the availability
Create a book object using Object constructor
Let the properties be title, author, availableCopies
Create a method displayInfo() that prints the details as follows:
"Title: <title>, Author: <author>, Available Copies: <availableCopies>"
*/

// https://codeshare.io/GkbR9V

let book = new Object(); // Object Constructor
book.title = "Two States";
book.author = "Chetan Bhagat";
book.availableCopies = 5;

book.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Available Copies: ${this.availableCopies}`);
}

book.displayInfo();