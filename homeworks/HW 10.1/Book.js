class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;
  }



  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва книги має бути непорожнім рядком');
    }
    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error("Ім'я автора має бути непорожнім рядком");
    }
    this.#author = value.trim();
  }

  get year() {
    return this.#year;
  }

  set year(value) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < 0 || value > currentYear) {
      throw new Error(`Рік видання має бути цілим числом від 0 до ${currentYear}`);
    }
    this.#year = value;
  }



  printInfo() {
    console.log(`Книга: "${this.title}", автор: ${this.author}, рік видання: ${this.year}`);
  }


  static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Потрібно передати непорожній масив книг');
    }
    if (!books.every((book) => book instanceof Book)) {
      throw new Error('Усі елементи масиву мають бути екземплярами Book');
    }
    return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
  }
}

module.exports = Book;