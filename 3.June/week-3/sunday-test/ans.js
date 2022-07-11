// // 1.An array is given, return the sum of all the positives numbers. const input = [ 1, -5, 2, 10, -30, 29, 50];

const input = [1, -5, 2, 10, -30, 29, 50];
//filtering the positive numbers
var newinput = input.filter(function (e) {
  return e > 0;
});
//shown in new array
console.log(newinput);
var sum = 0;
//adding all the elements in the array
for (let i = 0; i < newinput.length; i++) {
  sum += newinput[i];
}
//printing their sum
console.log(sum);

//. Multiple records of people are given, you have to print the first name and last name .
let friends = [
  { fname: "Rachal", lname: "Green", id: 1, marks: 98 },
  { fname: "Ross", lname: "Geller", id: 2, marks: 23 },
  { fname: "Monica ", lname: "Geller", id: 3, marks: 75 },
  { fname: "Joey", lname: " Tribbiani", id: 4, marks: 46 },
  { fname: "Chandler  ", lname: "Bing", id: 5, marks: 78 },
  { fname: "Phoebe", lname: "Buffay", id: 6, marks: 45 },
];
console.log(friends[0].fname);
console.log(friends[0].lname);
console.log(friends[1].fname);
console.log(friends[1].lname);
console.log(friends[2].fname);
console.log(friends[2].lname);
console.log(friends[3].fname);
console.log(friends[3].lname);
console.log(friends[4].fname);
console.log(friends[4].lname);
console.log(friends[5].fname);
console.log(friends[5].lname);

//3.You are given some names of different cities and a ordered list html element; add a list item for each to the ordered list.
city = ["Delhi", "Mumbai", "Jaipur", "Kolkata", "Indore"];
let orderedlist = document.getElementById("ol1");
city.array.forEach((element) => {
  orderedlist.innerHTML += `<li>${element}</li>`;
});
