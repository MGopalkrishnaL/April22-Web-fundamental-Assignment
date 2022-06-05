// // //WAP to print first 10 natural numbers
// // //using for loop
// // for (let i = 1; i <= 10; i++) {
// //   console.log(i);
// // }
// // //using functions
// // function naturalnumber() {
// //   for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// //   }
// // }
// // //WAP to print n natral numbers which was given by the user
// // function naturalnumber(n) {
// //   for (let i = 1; i <= n; i++) {
// //     console.log(i);
// //   }
// // }
// // //prompt -- it is used to take data from the user
// // ///parseInt - it is used to convert string to number form
// // // let n = parseInt(prompt("enter a number:"));
// // // naturalnumber(n);

// // ///WAP to print sum of first 10 natural numbers
// // let n = parseInt(prompt("enter the number"));
// // function sumofnaturalnum(n) {
// //   let sum = 0;
// //   for (let i = 1; i <= n; i++) {
// //     sum = sum + i;
// //   }
// //   console.log(sum);
// // }
// // sumofnaturalnum(15);

// //WAP to print the factorial of a number.
// let n = prompt("enter num");
// function factoral(n) {
//   let fact = 1;
//   for (let i = 0; i <= n; i++) {
//     fact = fact * i;
//   }
//   console.log(fact);
// }
// factoral(3);
// /////////
// fact = 1;
// function factorial(n) {
//   if (n < 1) {
//     console.log(1);
//   } else {
//     for (i = 1; i <= n; i++) {
//       fact = fact * i;
//     }
//     console.log(fact);
//   }
// }
// factorial(12);

// WAP to check wheather the number is prime or not
// let n = 6;
// for (let i = 2; i <= n - 1; i++) {
//   if (n <= ) {
//     console.log("prime");
//   } else {
//     console.log(" not prime number");
//   }
// }
// //
let n = parseInt(prompt("enter the number:"));
checkprime(n);
function checkprime(num) {
  //corner case
  // beacuse 0 and 1 are neither prime nor not-prime
  if (num <= 1) {
    return false;
  }
  ///check from 2 - (n-1)
  for (let i = 2; i <= n; i++) {
    if (num % i === 0) {
      //number not prime
      return false;
    }
  }
  return true;
}
if (checkprime(n)) {
  console.log("true");
} else {
  console.log("false");
}
// checkprime(n) ? console.log('true') : console.log('false')
