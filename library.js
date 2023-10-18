// library.js by Carlos A. Valdez

const myLibrary = [];       // contain our Book objects

// debating if we can make a seperate class for Books and a seperate class for Libraries, shall see..
function Book(title, author, pages, hasRead) {
    /**
     * - constructor for Book object
     * - comprised of a title, author, pages, and hasRead
     */
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    /** 
     * - Adds a Book object to the myLibrary array */
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value);
    const hasRead = document.querySelector("#hasRead").value;

    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

// DOM Manipulation section
const theModal = document.querySelector("#addBookModal");
const addBookButton = document.querySelector("#addBookBtn");
const cancelBookEntryButton = document.querySelector("#cancelBtn");
const addBookFromForm = document.querySelector("#addBookForm");

addBookButton.addEventListener("click", () => {
    // when the button is clicked, I want the form to appear, we are using a dialog as a modal
    // const theModal = document.querySelector("#addBookModal");
    theModal.showModal();       // to show the modal
});

cancelBookEntryButton.addEventListener("click", () => {
    // if the user selects to cancel, I want the form to dissapear, and no changes to be made
    theModal.close();           // to close the modal
});

addBookFromForm.addEventListener("submit", (event) => {
    /* 
       An issue where submitting your form will not do what you expect it to do. 
       That’s because the submit input tries to send the data to a server 
       by default.
    */
     event.preventDefault();
    addBookToLibrary();
});

// addBook.addEventListener("submit", () => {
//     this.preventDefault(); // prevent the default form submission behavior

//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const pages = parseInt(document.getElementById("title").value);
//     const hasRead = document.getElementById("title").checked;

//     const newBook = new Book(title, author, pages, hasRead);

//     addBookToLibrary(newBook);      // add the book to theLibrary

//     console.log(myLibrary);

//     theModal.close();       // close the modal
// });
