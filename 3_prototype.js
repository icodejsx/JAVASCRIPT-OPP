//  constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary 
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} on ${this.year}`

}

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}

// Revise / change the year

Book.prototype.revise = function (newYear) {
    this.year = newYear
    this.revised = true
}


// instantiate an Object
const book1 = new Book('Book One', 'jone doe', '2022');
const book2 = new Book('Book two', 'job cak', '2034');

book1.revise('2001')
console.log(book1);

