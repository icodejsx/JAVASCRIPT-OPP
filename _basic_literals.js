// const s = 'hello'
// console.log(typeof s)

// const s1 = new String('Hello')
// console.log(typeof s1)


const book1 = {
    title: 'Book1',
    author: 'John',
    year: 2000,
    getSummary: function () {
        return `${this.title} was written by ${this.author} on ${this.year}`
    }
}



const book2 = {
    title: 'Book2',
    author: 'John car ',
    year: 2040,
    getSummary: function () {
        return `${this.title} was written by ${this.author} on ${this.year}`
    }
}

// console.log(book2.getSummary())

// console.log(Object.values(book2))