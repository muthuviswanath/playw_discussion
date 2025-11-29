class Book{
    //constructor
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    //method
    getDetails(){
        return `${this.title} by ${this.author}`;
    }
}

let twoStatesBook = new Book("Two States", "Chetan Bhagat");
console.log(twoStatesBook.getDetails())