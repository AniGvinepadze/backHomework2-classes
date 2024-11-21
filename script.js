// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level
// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks(). listBooks should have array of objects with following properties: [
// {
// author: 'George Orwell',
// book: 'Nineteen Eighty-Four',
// year: 1948,
// }
// ]
// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.
// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()
// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
// {
// year: 2010 // use random year from 2010 to 2024 using math.random
// model: 'Ferrari',
// price: 350000
// }
// ]

//1

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, battery) {
    super(make, model, year);
    this.battery = battery;
  }
}

const tesla = new ElectricCar();
tesla.make = "Tesla";
tesla.model = "Model X";
tesla.year = 2024;
tesla.battery = 100;

console.log(tesla);

//2

class Library {
  constructor() {
    this.books = [];
  }
  addBook(author, book, year) {
    this.books.push({ author, book, year });
  }
  removeBook(bookTitle) {
    this.books = this.books.filter((book) => book.book !== bookTitle);
  }
  listBooks() {
    return this.books;
  }
}

const library = new Library();
library.addBook("George Orwell", "Noneteen Eighty-Four ", 1948);
console.log(library.listBooks());

//3

class Employee {
  calculateSalary(hoursWorked, hourlyRate) {
    return hoursWorked * hourlyRate;
  }
}

const employee = new Employee();
const salary = employee.calculateSalary(120, 30);
console.log(salary);

//5

class CarFactory {
  constructor() {
    this.cars = [];
  }
  addModel(model, price) {
    const year = Math.floor(Math.random() * (2024 - 2010 + 1) + 2010);
    this.cars.push({ model, price, year });
  }
  deleteCar(model) {
    this.cars = this.cars.filter((car) => car.model !== model);
  }
  updateCar(model, details) {
    this.cars = this.cars.map((car) =>
      car.model === model ? { ...car, ...details } : car
    );
  }
  getAllCars(){
    return this.cars
  }
}

const factory = new CarFactory()

factory.addModel("tesla",35000)
factory.addModel("BMW",80000)
factory.updateCar("tesla",{price:31000})
factory.deleteCar("BMW")
console.log(factory.getAllCars())