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

loadLibrary();

function addBookToLibrary(){
    const newBook = new Book (title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
    saveLibrary();
}

function clearForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

add.addEventListener('click', () => {
    addBookToLibrary();
    displayBooks(myLibrary);
    clearForm();
});


function displayBooks(myLibrary) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
        const tr = document.createElement('tr');

        
        const tdTitle = document.createElement('td');
        tdTitle.textContent = book.title;

        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = book.author;

        const tdPages = document.createElement('td');
        tdPages.textContent = book.pages;

        const tdRead = document.createElement('td');
        tdRead.textContent = book.read ? 'Read' : 'Not read';

        
        const tdToggle = document.createElement('td');
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle Read';
        toggleBtn.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks(myLibrary);
            saveLibrary();
        });
        tdToggle.appendChild(toggleBtn);

        
        const tdDelete = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
            saveLibrary();
        });
        tdDelete.appendChild(deleteBtn);

        
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tr.appendChild(tdToggle);
        tr.appendChild(tdDelete);

        
        tbody.appendChild(tr);
    });
}


function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function loadLibrary() {
    const data = localStorage.getItem('myLibrary');
    if (data) {
        myLibrary = JSON.parse(data);
        displayBooks(myLibrary);
    }
}



