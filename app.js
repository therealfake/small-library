const bookshelf = document.getElementById('bookshelf');
const bookform = document.querySelector('form');
const addBookBtn = document.querySelector('[data-modal-target]');
const overlay = document.getElementById('overlay') 

let myLibrary = [];

bookform.addEventListener('submit', e => {
    const modal = document.querySelector('.modal.active');

    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    resetForm();
    closeModal(modal);
});

addBookBtn.addEventListener('click', () => {
    const modal = document.querySelector(addBookBtn.dataset.modalTarget)
    openModal(modal);
});

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active');
    closeModal(modal);
});


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

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

// /**
//  *  Adds a book to the library
//  * @param {Book}} book 
//  */
// function addBookToLibrary(book){
//     myLibrary.push(book);
// }

/**
 *  Adds a book to the library
 * @param {Book}} book 
 */
 function addBookToLibrary() {
    title = bookform.elements["title"].value;
    author = bookform.elements["author"].value;
    pages = bookform.elements["pages"].value;
    book_status = bookform.elements["status"].checked ? "Read": "Not Read Yet";
    new_book = new Book(title, author, pages, book_status);
    myLibrary.push(new_book);
}

/**
 *  Displays all the books currently in myLibrary
 */
function displayBooks() {
    book = myLibrary[myLibrary.length - 1];

    card = document.createElement('div');
    card.classList.add('card')
    card.dataset.book = book;

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
        myLibrary = myLibrary.filter(other_book => other_book.title !== book.title)
        bookshelf.removeChild(e.target.parentNode);
    })

    card.append(title, author, pages, book_status, removebtn)
    bookshelf.appendChild(card);
}

/**
 *  Resets Add Book Form
 */
function resetForm() {
    bookform.reset();
}

