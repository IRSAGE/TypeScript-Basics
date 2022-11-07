// arrays
var names = ["hello"];
names.push("hello2");
// names.push(3); will not work
var numbers = [10, 20, 30];
numbers.push(25);
//numbers[1] = "hi"; will not work
var mixed = ["sibo", 4, "frontDev", 8]; //this works as an array of mixed both numbers and string
mixed[0] = 3; // this wiil work you.
//Objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.age = 40; //this will work
// ninja.age = ""; //this will not work
// ninja.skills = ["fighting","running"]; //this will not work
