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

        title = document.createElement('div');
        title.textContent = book.title
        title.classList.add('title');

        author = document.createElement('div');
        author.textContent = book.author
        author.classList.add('author');
        
        pages = document.createElement('div');
        pages.textContent = `${book.pages} pages`
        pages.classList.add('pages');

        book_status = document.createElement('button');
        book_status.textContent = book.status
        book_status.classList.add('status-btn');
        if (book.status == "Read") { 
            book_status.classList.add('read');
        }
        book_status.addEventListener('click', (e) => {
            e.target.classList.toggle('read');
            e.target.textContent === "Read" ? e.target.textContent = "Not Read Yet": e.target.textContent = "Read";
        })

        removebtn = document.createElement('button');
        removebtn.classList.add('remove-btn');
        removebtn.textContent = 'Remove';
        removebtn.addEventListener('click', (e) => {
            bookshelf.removeChild(e.target.parentNode);
        })
        // need to be able to remove book from actual library ds too!

        card.append(title, author, pages, book_status, removebtn)
        bookshelf.appendChild(card);
    }
}

first = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read');
second = new Book('Percy Jackson', 'Rick Riordan', 366, 'Not Read');
addBookToLibrary(first);
addBookToLibrary(second);
displayBooks();

