// Object Of Protos

const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} on ${this.year}`

    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = "Book One"
// book1.author = 'joundo'
// book1.year = "30030"

const book1 = Object.create(bookProtos, {
    title: { value: 'Book one' },
    author: { value: 'dddone' },

    year: { value: '3903' },

})

console.log(book1)