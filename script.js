// Variables

// Buttons
const addBtn = document.querySelector(".addBtn");
const exitBtn = document.querySelector(".exit");
const submit = document.querySelector(".submit");

// userInputs
const names = document.querySelector(".name");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const isread = document.querySelector(".isread");

// ELements
const modal = document.querySelector(".modal");
const bookShelf = document.querySelector(".bookShelf");

let myLibrary = [];

function Book(name, author, pages, isread) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isread = isread;

  this.showDetails = function () {
    console.log(`Name : ${name}
                  Author: ${author}
                  Pages: ${pages}
                  Have Read: ${isread}`);
  };
}

const book1 = new Book(
  "Harry Potter Chamber of Secrets",
  "J.K.Rowling",
  400,
  "true"
);

const book2 = new Book("To kill a mocking bird", "Harper Lee", 250, "no");
const book3 = new Book("Norwegian Wood", "Haruki Murakami", 600, "yes");
const book4 = new Book("Great Gatsby", "J.Fitzgerald", 250, "no");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

addBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("hidden");
});

function closebook() {
  document.querySelector(".modal").classList.add("hidden");
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

// Display the book to the website

function createBook(name, author, pages, hasread) {
  const book = document.createElement("div");
  book.classList.add("book");

  const h1 = document.createElement("h2");
  h1.append("Book Details");
  book.append(h1);

  const args = [...arguments];
  const titles = ["Name", "Author", "Pages", "Have Read?"];

  for (let i = 0; i < args.length; i++) {
    const p = document.createElement("p");
    p.append(titles[i] + " : ");

    const span = document.createElement("span");
    span.classList.add("listTitle");
    span.append(args[i]);
    p.append(span);
    book.append(p);
  }

  return book;
}

// Manually Displaying the Book Objects from the Array to the Website
myLibrary.forEach((book) => {
  const BookToDisplay = createBook(
    book.name,
    book.author,
    book.pages,
    book.isread
  );
  bookShelf.append(BookToDisplay);
});

// Storing the User INput in the BOOK Object
submit.addEventListener("click", () => {
  const BookToDisplay = createBook(
    names.value,
    author.value,
    pages.value,
    isread.value
  );
  bookShelf.append(BookToDisplay);
});

// Erasing of form after taking user input
function eraseContents() {
  names.value = "";
  author.value = "";
  pages.value = "";
  isread.value = "";
}
