// Dyanamic Types
let age: any = 25;
age = true;
age = "Hello";
age = { name: "me" };
//all would work since the variable age can have anytype any time

//Arrays
let mixed: any[] = [];
mixed.push(5);
mixed.push("Me");
mixed.push(true);

console.log(mixed);

//Objects
let ninja: { name: any; age: any };
ninja = { name: "Me", age: 30 };
console.log(ninja);
