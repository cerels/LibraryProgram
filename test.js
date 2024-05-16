let myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, " not readed");
const harryPotter = new Book("Harry Potter", "J. K. Rowling", 652, "readed");

addBookToLibrary(harryPotter);
addBookToLibrary(theHobbit);
displayLibrary();

function Book(title, author, numberPages, readed) {
  this.title = title;
  this.author = author;
  this.numberPages = numberPages;
  this.readed = readed;
  this.info = () => `${title} by ${author}, ${numberPages} pages, ${readed}`;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function displayLibrary() {
  const library = document.getElementById("library");

  let htmlString = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const item = myLibrary[i];
    htmlString += `
     <tr>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.numberPages}</td>
        <td id="readStatus${i}" onclick="toggleReadStatus(${i})">${item.readed}</td>
        <td><button onclick="removeRow(${i})">Delete</button></td>
     </tr>`;
  }

  library.innerHTML = `
  <table>
  <thead>
    <tr>
        <th>Name</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Read Status</th>
    </tr>
  </thead>
    <tbody>
      ${htmlString}
    </tbody>
  </table>`;
}

function showForm() {
  const formSpace = document.getElementById("formSpace");

  formSpace.innerHTML = `
  <h1>Add New Book</h1>
        <form action="#" method="post">
            <label for="author">Author:</label><br>
            <input type="text" id="author" name="author" required><br><br>
    
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title" required><br><br>
    
            <label for="pages">Number of Pages:</label><br>
            <input type="number" id="pages" name="pages" required><br><br>
    
            <label for="read">Have you read this book?</label><br>
            <select id="read" name="read" required>
              <option value="Readed">Readed</option>
              <option value="Not readed">Not readed</option>
            </select><br><br>
            
    
            <input type="submit" value="Submit" onclick="retrieveForm()">
        </form>
  `;
}

function retrieveForm() {
  const formSpace = document.getElementById("formSpace");

  event.preventDefault();
  author = document.getElementById("author").value;
  bookName = document.getElementById("title").value;
  pages = document.getElementById("pages").value;
  readStatus = document.getElementById("read").value;

  newBook = new Book(bookName, author, pages, readStatus);

  addBookToLibrary(newBook);

  formSpace.innerHTML = "";
  displayLibrary();
}

function removeRow(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function toggleReadStatus(index) {
  if (myLibrary[index].readed === "Readed") {
    myLibrary[index].readed = "Not readed";
  } else {
    myLibrary[index].readed = "Readed";
  }
  displayLibrary();
}