//
function Book(name, author, isbn, numofcopies) {
  this.name = name;
  this.author = author;
  this.isbn = isbn;
  this.numofcopies = numofcopies;
}

Book.prototype.getAvaibility = function () {
  if (this.numofcopies === 0) {
    return "out of stock!";
  } else if (this.numofcopies < 5) {
    return "low Stock";
  } else {
    return "in stock";
  }
};

Book.prototype.sell = function (numofcopies = 1) {
  this.numofcopies -= numofcopies;
};

Book.prototype.restock = function (numofcopies = 5) {
  this.numofcopies += numofcopies;
};

const HungerGames = new Book("hungerGames", "santos", 12345, 10);
// console.log(HungerGames.getAvaibility());
// HungerGames.sell(10);
// console.log(HungerGames.getAvaibility());
// HungerGames.restock(100);
// console.log(HungerGames.getAvaibility());

//if we want to do the same thing with class constructor
class Book2 {
  constructor(name, author, isbn, numberofcopies) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.numofcopies = numberofcopies;
  }
  get NumberOfBooks() {
    return this.numofcopies;
  }
  set NewNumberOfBooks(number) {
    return (this.numofcopies = number);
  }
  getAvaibility() {
    return this.numofcopies == 0
      ? "out of stock"
      : this.numofcopies < 5
      ? "low stock"
      : "in stock";
  }
  sell(numofcopies = 1) {
    this.numofcopies -= numofcopies;
  }
  restock(numofcopies = 5) {
    this.numofcopies += numofcopies;
  }
}
const cosmos = new Book2("cosmos", "mush", 1234, 100);
cosmos.NewNumberOfBooks = 20;
console.log(cosmos.NumberOfBooks);
