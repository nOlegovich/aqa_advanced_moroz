const Book = require('./Book');
const EBook = require('./EBook');

console.log('Книги');
const book1 = new Book('Книга 1', 'Автор 1', 2000);
const book2 = new Book('Книга 2', 'Автор 2', 2000);
const book3 = new Book('Книга 3', 'Автор 3', 2000);

book1.printInfo();
book2.printInfo();
book3.printInfo();


console.log('Електронна книга');
const ebook1 = new EBook('Книга 4', 'Автор 4', 2012, 'TXT');
ebook1.printInfo();


console.log('Геттери та сеттери');
console.log('Назва book2 (геттер):', book2.title);
book2.title = 'Автор 5';
book2.year = 1973;
console.log('Після зміни через сеттери:');
book2.printInfo();

ebook1.fileFormat = 'PDF';
console.log('Новий формат ebook1:', ebook1.fileFormat);


const invalidChanges = [
  () => (book1.title = ''),
  () => (book1.author = 123),
  () => (book1.year = 3000),
  () => (book1.year = 'колись'),
  () => (ebook1.fileFormat = 'DOCX'),
];

invalidChanges.forEach((change) => {
  try {
    change();
  } catch (error) {
    console.log('Помилка валідації:', error.message);
  }
});


console.log('Найдавніша книга');
const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.getOldestBook(allBooks);
oldest.printInfo();

console.log('EBook.fromBook');
const ebook2 = EBook.fromBook(book3, 'pdf');
ebook2.printInfo();
console.log('ebook2 instanceof EBook:', ebook2 instanceof EBook);
console.log('ebook2 instanceof Book:', ebook2 instanceof Book);