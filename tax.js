// function calculateTax(amount,rate){
// return amount * rate;
// }
// // const Tax =
// //  calculateTax(100, 0.5);
// // console.log(Tax);

// module.exports=calculateTax

// class Subscription {
//     #active = false; //private
//    constructor(plan, pricePerMonth) {
//     this.plan = plan;
//     this.pricePerMonth = pricePerMonth;
//   }

//   activate() {
//     this.#active = true;
//   }

//   cancel() {
//     this.#active = false;
//   }

//   get monthlyCost() {
//     // return this.#active ? this.pricePerMonth : 0; ternary operator
//     if (this.#active) {
//       return this.pricePerMonth;
//     } else {
//       return 0;
//     }
//   }
// }

// const sub = new Subscription("premium", 50);

// console.log(sub.monthlyCost); // 0 

// sub.activate();
// console.log(sub.monthlyCost); // 50

// sub.cancel();
// console.log(sub.monthlyCost); // 0

// you keep yoyr code commands in a try block and catch the error in the catch block.
//  This way, if an error occurs, it will be caught and handled gracefully without crashing the program. 
// this is useful when querrying a database or making an API call, 
// where errors can occur due to network issues or invalid data.

function calculateTax(amount, rate) {
  return amount * rate;
}
console.log(calculateTax(100, 0.5));

try {
  const result = calculateTax(100, 0.5);
  console.log(result);
}catch (error) {
  console.log("Error calculating tax:", error.message);
}