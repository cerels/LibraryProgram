const myLibrary = [];

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
  for (const item of myLibrary) {
    htmlString += `
     <tr><td>${item.title}</td>
      <td>${item.author}</td>
      <td>${item.numberPages}</td>
      <td>${item.readed}</td><tr>`;
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

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  " not readed"
);
const harryPotter = new Book(
  "Harry Potter",
  "J. K. Rowling",
  652,
  "readed"
);
addBookToLibrary(harryPotter)
addBookToLibrary(theHobbit)
displayLibrary()