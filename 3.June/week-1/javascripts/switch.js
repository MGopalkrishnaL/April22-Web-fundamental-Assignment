/////switch case
//check the number provided by the user and print its roman numerical
function roman(num) {
  switch (num) {
    case 1:
      console.log("I");
      break;
    case 2:
      console.log("II");
      break;
    case 3:
      console.log("III");
      break;
    case 4:
      console.log("IV");
      break;
    case 5:
      console.log("V");
      break;
    case 6:
      console.log("VI");
      break;
    case 7:
      console.log("VII");
      break;

    default:
      console.log("invalid number");
      break;
  }
}

roman(2);
roman(3);
roman(4);
roman(1);

//make a calculator using switch case
function cla(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      console.log("invalid entery");
      break;
  }
  console.log(result);
}
cla(10, 20, "+");
cla(10, 20, "-");
cla(10, 20, "*");
cla(10, 20, "/");

// to check the week days

function weekday(day) {
  switch (day) {
    case 1:
      console.log("it is a Sunday ");
      break;
    case 2:
      console.log("it is a Monday");
      break;
    case 3:
      console.log("it is a Tuesday ");
      break;
    case 4:
      console.log("it is a Wednesday ");
      break;
    case 5:
      console.log("it is a Thrusday ");
      break;
    case 6:
      console.log("it is a Friday ");
      break;
    case 7:
      console.log("it is a Satday ");
      break;
    default:
      console.log("invalid entery");
      break;
  }
}
weekday(1);
weekday(3);
weekday(6);

///to check if a given number is greater than 5
function greater(num) {
  switch (num) {
    case num > 5:
      console.log("number is greater than 5 ");
      break;
    case num == 5:
      console.log("number is Equal to  5 ");
      break;
    case num < 5:
      console.log("number is less than 5 ");
      break;
  }
}
greater(4);
greater(9);
greater(1);
