const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const add = document.getElementById('add');

const library = new Library();
library.display();

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead(){
        this.read = !this.read;
    }
}


class Library {
    constructor() {
        this.books = JSON.parse(localStorage.getItem('myLibrary')) || [];
    }

    addBook(book) {
        this.books.push(book);
        this.save();
    }

    deleteBook(index) {
        this.books.splice(index, 1);
        this.save();
    }

    toggleBook(index){
        this.books[index].toggleRead();
        this.save();
    }

    save() {
        localStorage.setItem('myLibrary', JSON.stringify(this.books));
    }

    display() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    this.books.forEach((book, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read ? 'Read' : 'Not read'}</td>
            <td><button class="toggle">Toggle</button></td>
            <td><button class="delete">Delete</button></td>
        `;

        tr.querySelector('.toggle').addEventListener('click', () => {
            this.toggleBook(index);
            this.display();
        });

        tr.querySelector('.delete').addEventListener('click', () => {
            this.deleteBook(index);
            this.display();
        });

        tbody.appendChild(tr);
        });
    }
}



add.addEventListener('click', () => {
  const book = new Book(title.value, author.value, pages.value, read.checked);
  library.addBook(book);
  library.display();

  title.value = author.value = pages.value = '';
  read.checked = false;
});
