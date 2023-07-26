class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }
    getSummary() {
        return `${this.title} was written by ${this.author} on ${this.year}`
    }
}
// 

// instantiating Object 
const book1 = new Book("Book one", "jondo", '2019')

console.log(book1)