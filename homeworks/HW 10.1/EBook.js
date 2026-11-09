const Book = require('./Book');

const ALLOWED_FORMATS = ['PDF', 'TXT'];

class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу має бути непорожнім рядком');
    }
    const format = value.trim().toUpperCase();
    if (!ALLOWED_FORMATS.includes(format)) {
      throw new Error(`Непідтримуваний формат "${value}". Дозволені: ${ALLOWED_FORMATS.join(', ')}`);
    }
    this.#fileFormat = format;
  }

  printInfo() {
    console.log(
      `Електронна книга: "${this.title}", автор: ${this.author}, ` +
        `рік видання: ${this.year}, формат файлу: ${this.fileFormat}`
    );
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error('Перший аргумент має бути екземпляром Book');
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;