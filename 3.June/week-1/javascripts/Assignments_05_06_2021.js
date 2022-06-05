// //Write a program to display the cube of the number upto given an integer.
function CubeOfNumber(n) {
  let cube;
  for (let i = 1; i <= n; i++) {
    cube = i * i * i;
    console.log(cube);
  }
}
CubeOfNumber(5);

//Write a program to display the n terms of odd natural number and their sum.

function DisplayOddnumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
    sum = sum + i;
  }
  console.log(sum);
}
DisplayOddnumbers(20);

//WAP to print Nth prime number.(Input: 5, Output: 11, since 11 is the 5th prime number)

const getNthPrime = (num) => {
  let count = 0;
  for (let i = 2; i < 1000; i++) {
    if (i % 2 !== 0) ++count;
    if (count === num) {
      return i;
    }
  }
};
console.log(getNthPrime(5));
