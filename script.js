const myLibrary = [];


function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}
const booksGrid = document.querySelector('.container-books')
const bookTitle = document.querySelector("#book")
const author = document.querySelector("#author")
const status = document.querySelector("#status")
const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    createBookCard(myLibrary[0])
  });

const book1 = new Book("The Lord of the Rings",  "Tolkien", "read")
const book2 = new Book("Alice in Wonderland", "Lewis Caroll", "not read")

function addBookToLibrary() {
    const newBook = new Book(bookTitle.value, author.value, status.value)
    myLibrary.push(newBook);
}



const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
  
    bookCard.classList.add('book-card')
  
    title.textContent = `"${book.title.toUpperCase()}"`
    author.textContent = book.author.toUpperCase()
    readBtn.textContent = book.status.toUpperCase()
    removeBtn.textContent = 'REMOVE'
  
  
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    booksGrid.appendChild(bookCard)
  }

