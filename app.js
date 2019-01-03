// Book Class: Represent a book
class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI{
  static displayBooks(){
    const StoredBooks = [
      {
        title:'FortNite Tips',
        author:'Nathan Guriand',
        isbn:'234567'
      },
      {
        title:'XMas Toys for Boys & Girls',
        author:'London Parks',
        isbn:'113377'
      },
      {
        title:'Active Sports',
        author:'Adele Parks',
        isbn:'993388'
      }
    ];
    
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book){
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
  
    list.appendChild(row);
  }

static deleteBooks(el) {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
}

  static clearfields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class: Handles Storage

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Instatiate Book 
  const book = new Book(title, author, isbn);
  
  //  Add books to UI
  UI.addBookToList(book);

  //  Clear fields
  UI.clearfields()
  
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBooks(e.target)
});