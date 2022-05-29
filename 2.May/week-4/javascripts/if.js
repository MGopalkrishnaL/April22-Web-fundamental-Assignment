let n = 12;
console.log(n);

///// to check whaether the give number is even or odd
function isevenorodd(num) {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

isevenorodd(12);
isevenorodd(45);
isevenorodd(452);
isevenorodd(4523);
isevenorodd(451);

///to check if inpt variable is a number or not
function isvalidnumber(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a number`);
  } else {
    console.log(`${num} is a valid number`);
  }
}

isvalidnumber("a");
isvalidnumber(2);
isvalidnumber("f");
isvalidnumber("123");

///To check which is greater number
function greaternum(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater`);
  } else if (num1 == num2) {
    console.log(`${num1} is equal to ${num2}`);
  }
}
greaternum(2, 4);
greaternum(2, 2);
greaternum(7, 4);
greaternum(12, 4);

///ternary operators (? :)
function tera(num1) {
  num1 > 5 ? console.log("greater") : console.log("smaller");
}
tera(4);
tera(12);
