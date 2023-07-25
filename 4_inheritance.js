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

// magazines constructors
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year)

    this.month = month;
}

// inherite Protptyype

Magazine.prototype = Object.create(Book.prototype)

// instantiate Magazine Object

const mag1 = new Magazine("MAGINE ONE", "jon doe", "2019", 'jen')

// use Magazines constructor 
Magazine.prototype.constructor = Magazine

console.log(mag1)