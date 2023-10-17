// library.js by Carlos A. Valdez

/* 
    For Button and dialog modal form
*/
const openButton = document.getElementById("addBookBtn");
const theModal = document.getElementById("addBookModal")
const closeButton = document.getElementById("closeBtn");

openButton.addEventListener("click", () => {
    theModal.showModal();
})

closeButton.addEventListener("click", () => {
    theModal.close();
})



const myLibrary = [];

// debating if we can make a seperate class for Books and a seperate class for Libraries, shall see..
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    // do stuff..
}
