function searchBook(bookName, callback) {
  console.log(`Searching for "${bookName}"...`);

  setTimeout(() => {
    const books = ["JavaScript Basics", "Learn Python", "Data Structures", "React Guide"];
    const result = books.find(book => book.toLowerCase().includes(bookName.toLowerCase()));
    if (result) {
      callback(null, result);
    } else {
      callback("Book not found", null);
    }
  }, 2000);
}

// Example
searchBook("react", (err, result) => {
  if (err) console.log(err);
  else console.log("Book Found:", result);
});