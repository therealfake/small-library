let bookshelf = document.getElementById('bookshelf');
let myLibrary = [];

/**
 * Constructor for Book
 * @param {String} title Title of book
 * @param {String} author Author of book
 * @param {Number} pages Number of pages in book
 * @param {String} status 
 */
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
}

/**
 *  Adds a book to the library
 * @param {Book}} book 
 */
function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks() {
    for(let book of myLibrary) {
        card = document.createElement('div');
        card.classList.add('card')
        card.textContent = book.info();

        bookshelf.appendChild(card);
    }
}

first = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// first.info()

