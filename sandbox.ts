// explicit types
let character: string;
let age: number;

age = 30;
// age = "";this will not work

//arrays
let ninja: string[]; //an array of strings
//ninja = [10, 20]; will not work

ninja = ["me"];
//ninja.push("metoo"); this will not work

//union types (an array of many types)
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(20);
//mixed.push(false); will not work

let uid: string | number; // union types on a normal variable

//Objects
let ninjaOne: object;
ninjaOne = { name: "Me", age: 30 };
//ninjaOne = "test"; will not work

let ninjaTwo: {
  name: string;
  age: number;
};

ninjaTwo = { name: "Me", age: 30 };
// ninjaTwo = { name: "Me" }; will not work becouse it needs all the two fields decraled to have
