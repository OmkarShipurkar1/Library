// Variables
const bookShelf = document.querySelector(".bookShelf");

// Array to store the BOOK object
let myLibrary = [];
let i = 0;

// TODO: BOOK Object
// Class Refactor
class Book {
  constructor(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
    console.log(`Have Read: ${this.isRead}`);
  }
}

// Manual Dummy Book Data
const book1 = new Book("Harry Potter", "J.K.Rowling", 1000, "yes");
const book2 = new Book("To kill a mockingbird", "harper lee", 350, "no");
const book3 = new Book("Pride and prejudice", "jane austen", 500, "yes");
const book4 = new Book("Great Gatsby", "F.Fitzgerald", 400, "yes");

// Adding the Manual Entries to the myLibrary Array
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

// TODO: Create Book Object prototype function
Book.prototype.createBook = function () {
  // could done easily with .innerHTML but gotta take the hard way
  const div = document.createElement("div");
  const h1 = document.createElement("h3");

  h1.append(this.name);

  const p1 = document.createElement("p");
  p1.append("Author : " + this.author);
  const p2 = document.createElement("p");
  p2.append("Pages : " + this.pages);
  const p3 = document.createElement("p");
  p3.append("Have Read : " + this.isRead);

  const div1 = document.createElement("div");
  div1.append(h1, p1, p2, p3);

  div.append(div1);
  div.classList.add("book");

  div.setAttribute("data-set", `${i}`);
  i = i + 1;

  const div2 = document.createElement("div");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.classList.add("buttons");
  deleteBtn.append("Remove");

  const statusBtn = document.createElement("button");
  statusBtn.innerHTML = this.isRead === "yes" ? "Not Read" : "Read";
  statusBtn.classList.add("buttons");
  statusBtn.classList.add(this.isRead === "yes" ? "not-read" : "read");

  div2.append(deleteBtn);
  div2.append(statusBtn);

  div.append(div2);
  bookShelf.append(div);

  // Event Listeners

  deleteBtn.addEventListener("click", () => {
    bookShelf.removeChild(div);
  });

  statusBtn.addEventListener("click", () => {
    if (statusBtn.innerHTML === "Read") {
      statusBtn.innerHTML = "Not Read";
      statusBtn.classList.toggle("read");
      statusBtn.classList.toggle("not-read");
      p3.innerHTML = "Have Read : yes";
    } else {
      statusBtn.innerHTML = "Read";
      statusBtn.classList.toggle("read");
      statusBtn.classList.toggle("not-read");
      p3.innerHTML = "Have Read : no";
    }
  });
};

// Clear The User iNput
function clear() {
  names.value = "";
  author.value = "";
  pages.value = "";
  isRead = "";
  noBtn.checked = false;
  yesBtn.checked = false;
}

const dialog = document.querySelector("dialog");
document.querySelector(".addBtn").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector(".close").addEventListener("click", () => {
  dialog.closeModal();
});

// TODO: Inserting user data in Book Object

// user input variables
const names = document.querySelector(".name");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

document.querySelector(".take").addEventListener("click", (event) => {
  let isRead = noBtn.checked ? "no" : "yes";
  if (names.value && author.value && pages.value) {
    const bookx = new Book(names.value, author.value, pages.value, isRead);
    myLibrary.push(bookx);
    bookx.createBook();
    clear();
    dialog.closeModal();
    event.preventDefault();
  }
});

// Function to display all books
function displayAllBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].createBook();
  }
}

displayAllBooks();

// Really wasted my 4 hours on this code  but got result only by adding 2 lines in the above code :(

// for (let i = 0; i < myLibrary.length; i++) {
//   deleteBtns[i].addEventListener("click", () => {
//     let bookEl = document.querySelector(`.book[data-index="${i + 1}"]`);
//     console.log(bookEl);
//     console.log(i);
//     bookShelf.removeChild(bookEl);
//   });
// }
