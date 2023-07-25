//  constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary 
Book.prototype.getSummary = function () {
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} on ${this.year}`
    }
}


// instantiate an Object
const book1 = new Book('Book One', 'jone doe', '2022');
const book2 = new Book('Book two', 'job cak', '2034');

console.log(book1.getSummary());
