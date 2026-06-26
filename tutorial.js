// let respects scope chain
function foo() {
  let a = 1 
//   u can change a to 2
a = 2
  console.log(a) // 2
}

foo();

// arrays and objects are nonprimitive data types
// while otherd are primitive data types
// primitive data types are passed by value
// nonprimitive data types are passed by reference  
let data= [1, 2, 3,"john",["hello", "world"]]
// the array contains 5 items even with the nested array
// serves as one


let acctBalance = 1000
console.log(acctBalance) // 1000
acctBalance = 1500
console.log(acctBalance) // 1500  
// acctBalance can be changed because it is 
// a variable declared with let
// javascript is a dynamically typed language,
//  so you can change the type of a variable

// type casting
let balance = 1000
console.log(balance) // 1000
balance = "one thousand"
console.log(balance) // "one thousand"

// if you want to directly convert an float to a int,
// use parseInt() function
let floatNum1 = 10.5
let floatNum2 = parseInt(floatNum1)
console.log(floatNum2) // 10

// converting an int to a fixed float with 2 decimal places
let intNum = 10
let floatNum = parseFloat(intNum).toFixed(2)
console.log(floatNum) // "10.00"




// converting a string to a number
function convertToNumber(str) {
  let num = Number(str) 
return num
}
convertToNumber("2000") // 2000
// let amount = "2000"
// let convertedAmount = convertToNumber(amount)
// console.log(convertedAmount) // 2000

// converting a number to a string
let mainAmount = 2000
let convertedAmount = String(mainAmount)
console.log(convertedAmount) // "2000"

// type checking
let myBalance = 2000
console.log(typeof myBalance) // "number"

let amount = [1000, 2000, 3000]
console.log(typeof amount) // "object"

let object = { name: "John", age: 30 }
console.log(typeof object) // "object"
console.log(Array.isArray(object)) // false

// boolean type 
console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(1)) // true
console.log(Boolean("hello")) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true    


// increament and decrement operators
let count = 0
count++ // count is now 1
console.log(count) // 1
// this is because the post-increment operator
//  returns the value before incrementing
console.log(++count) // 2
// this is because the pre-increment operator
//  returns the value after incrementing
let counting = 0
console.log(counting++) // 0
console.log(counting) // 1
// the val was logged before the increment, so it shows 0
// this is because the post-decrement operator
//  returns the value before decrementing

count-- // count is now 1
console.log(count) // 1 

console.log(true && false || true) // true;
console.log((true || false && true) || (false && true || false));

// !! converts a value to its boolean equivalent
// the first ! negates the value,
//  and the second ! negates it again,
//  resulting in the original value's boolean equivalent
// after converting it to boolean it will check if the 
// value is truthy or falsy
// boolean with an empty string is false
console.log(!!""); // false
// while boolean with a non-empty string is true
console.log(!!"hello"); // true

// spread operators
// let anArray = [1, 2, 3]
// console.log(anArray.length) // 3
// anArray.push(4) 
// console.log(anArray) // [1, 2, 3, 4]
// // pop removes the last element from an array and returns that element
// anArray.pop() 
// console.log(anArray) // [1, 2, 3]   
// let anArray1 = [60,"hello"]
// let anArray2 = [11,12,...anArray1,...anArray]
// console.log(anArray2) // [11, 12, 60, "hello", 1, 2, 3] 
// spread operator with an object
let obj1 = { name: "John", age: 30 }
let obj2 = { city: "New York", country: "USA" }
let allObj = {phone: "123-456-7890", 
  address:"no 14 pound rd", ...obj1, ...obj2 }
console.log(allObj) // {phone: "123-456-7890", address:"no 14 pound rd", name: "John", age: 30, city: "New York", country: "USA" }


for(let i = 0; i <= 5; i++) {
  console.log(i) // 0, 1, 2, 3, 4, 5
}

for(let index = 50; index >=0; index-=10) {
  console.log("outer loop", index) // 50, 40, 30, 20, 10, 0
 
  for (let innerIndex = 0; innerIndex < 5; innerIndex++) {
    console.log("inner loop", index * innerIndex) // 0, 1, 2, 3, 4
  }
}

// function expression
// can not be called before it is defined
let greet = function(name) {
  console.log(name + "Hello, World!")
  
}

greet("john ") // "Hello, World!"

// function declaration
// can be called before it is defined
// it does hoisting, which means that the function
//  declaration is moved to the top of the scope 
// before code execution
function add(a, b) {
  return a + b
} 

console.log(0 ?? "default")


// factory function
// a function that returns another function is a factory function
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier
  }
}
  const double = createMultiplier(2)
  const triple = createMultiplier(3)

console.log(double(5)) // 10
console.log(triple(5)) // 15    


// closure
// a closure is a function that has access to its outer function's scope
// even after the outer function has returned
function outerFunction() {
  let outerVariable = "I am from the outer function"
  return function() {
    return outerVariable
  }
} 
const innerFunction = outerFunction()
console.log(innerFunction()) // "I am from the outer function"
// innerFunction has access to the outerVariable even after 
// the outerFunction has returned


// closure are used for data privacy and encapsulation
function createCounter() {
  let count = 0
  return {
    increment(){
      count++
      return count
    },

    decrement(){
      count--;
      return count
    },

    getCount(){
      return count
    },
  };

}
const counter = createCounter()
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2
console.log(counter.getCount()) // 2



// recursion
// a function that calls itself is a recursive function
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120

// class
// constructor is a special method for creating
//  and initializing an object created with a class

// this is a dynamic class, which means 
// that you can add properties and methods
//  to it after it has been defined
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name} 
//       and I am ${this.age} years old.`)
//   }
// }
// the constructor method is called when a new 
// instance of the class is created
// person1 is an insance of the Person class

// const person1 = new Person("John", 30) //create instance of the class 
// person1.greet() // "Hello, my name is John and I am 30 years old."  

// let car ={
//   name:"lexus",
//   model:"L230",
//   year:"2023",
//    display:function(){
//     console.log(`the name of the car is ${this.name} with model ${this.model} of year:${this.year}`)
//   },
// };

// car.display();

// let myCar = new car ();
// let output = myCar.display();
// console.log(output);


// function Person(name, age) {
// this.name = name;
// this.age = age;
// this.greet = function() {
//  console.log(`Hello, my name is ${this.name} and i am ${this.age} years old my address also is ${this.address}`);
// };
// }
// const john = new Person('sam', 35);
// john.address="no 15 joy street" //newly assigned property
// console.log(john);
// john.greet();

// let student = {
//     name: "John",
//     age: 20,
//     introduce:function() {
//       console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//     }
//   };

// student.introduce(); 

// class cars {
//   constructor(name,model){
//     this.name = name;
//     this.model = model;
//   }
//   carDetails(){
//     console.log(`the car name is ${this.name} and the model is ${this.model}`)}
// };

// const Cars = new cars ("lexus","ls350");
// Cars.carDetails();

// class MathHelper {
// static add(a, b) {
// return a + b;
// }
// }
// console.log(MathHelper.add(3, 4)); 

// function add(a,b){
//   return a+b;
// }

// let mathHelper={
//   num1: 6,
//   num2: 7,
//   add(){
//     console.log(this.num1 + this.num2);},

// }

// mathHelper.add();


// Getters and Setters
// class Circle {
// constructor(radius) {
// this._radius = radius;
// }
// get radius() {
//  return this._radius;
// }
// set radius(value) {
// if (value <= 0) throw new Error('Radius must be positive');
// this._radius = value;
// }
// get area() {
// return Math.PI * this._radius ** 2;
// }
// }
// const circle = new Circle(5);
// console.log(circle.area); // 78.53981633974483
// circle.radius = 10;
// console.log(circle.area); // 314.1592653589793


//Private Fields
// class BankAccount {
//   #balance = 0; // Private field
//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }
//   deposit(amount) {
//     this.#balance += amount;
// }
// withdraw(amount) {
// if (amount > this.#balance) throw new 	Error('Insufficient funds');
//  this.#balance -= amount;
// }
// get balance() {
// return this.#balance;
// }
// }
// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.balance); // 150


//closures
// function CreateWallet(){
//   #balance = 0; // Private field
//   return {
//     credit(amount) {
//       this.#balance += amount;
//       return this.#balance;
//     },
//     debit(amount) {
//       this.#balance -= amount;
//       return this.#balance;
//     },
//     getBalance() {
//       return this.#balance;
//     }
//   };
// }

// const myWallet = createWallet();
// myWallet.credit(100);
// console.log(myWallet.getBalance()); // 100

// closures

function CreateWallet() {
  let balance = 0; // private variable

  return {
    credit(amount) {
      balance += amount;
      return balance;
    },
    debit(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}


const wallet = CreateWallet();
console.log(wallet.credit(150)); // 150
console.log(wallet.debit(50));   // 100
console.log(wallet.getBalance()); // 100
