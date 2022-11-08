// explicit types
var character;
var age;
age = 30;
// age = "";this will not work
//arrays
var ninja; //an array of strings
//ninja = [10, 20]; will not work
ninja = ["me"];
//ninja.push("metoo"); this will not work
//union types (an array of many types)
var mixed = [];
mixed.push("hello");
mixed.push(20);
//mixed.push(false); will not work
var uid; // union types on a normal variable
//Objects
var ninjaOne;
ninjaOne = { name: "Me", age: 30 };
//ninjaOne = "test"; will not work
var ninjaTwo;
ninjaTwo = { name: "Me", age: 30 };
// ninjaTwo = { name: "Me" }; will not work becouse it needs all the two fields decraled to have
