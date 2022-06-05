/// Using SWITCH statement, get the day of the week based on day number, means if the day is 1, the day of week is Sunday. If the day is 2 , it's Monday and so on.
let day;
day = 1;

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
// To check if a number is even or odd
function evenorodd(num) {
  if (num % 2 == 0) {
    console.log("it is a even number ");
  } else {
    console.log(" it is a odd number ");
  }
}
evenorodd(34);
evenorodd(31);
evenorodd(59);
