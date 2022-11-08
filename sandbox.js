// Dyanamic Types
var age = 25;
age = true;
age = "Hello";
age = { name: "me" };
//all would work since the variable age can have anytype any time
//Arrays
var mixed = [];
mixed.push(5);
mixed.push("Me");
mixed.push(true);
console.log(mixed);
//Objects
var ninja;
ninja = { name: "Me", age: 30 };
console.log(ninja);
