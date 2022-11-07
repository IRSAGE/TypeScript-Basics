// arrays
let names = ["hello"];

names.push("hello2");
// names.push(3); will not work

let numbers = [10, 20, 30];

numbers.push(25);
//numbers[1] = "hi"; will not work

let mixed = ["sibo", 4, "frontDev", 8]; //this works as an array of mixed both numbers and string
mixed[0] = 3; // this wiil work you.

//Objects

let ninja = {
  name: "mario",
  belt: "black",
  age: 30, // they work as other variables you can not change the type of them after decralation.
};

ninja.age = 40; //this will work
// ninja.age = ""; //this will not work
// ninja.skills = ["fighting","running"]; //this will not work
