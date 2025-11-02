const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const add = document.getElementById('add');

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const newBook = new Book (title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
}

add.addEventListener('click', function(){
    addBookToLibrary();
    console.log(myLibrary);
});


function displayBooks(myLibrary){
    myLibrary.forEach(book => {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');

        tdTitle.textContent = book.title;
        tdTitle.textContent = book.author;
        tdTitle.textContent = book.pages;
        tdTitle.textContent = book.read;

        
    })
}
