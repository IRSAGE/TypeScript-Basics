"use strict";
// //The Dom & Type Casting
// const anchor = document.querySelector("a")!;
// console.log(anchor.href); //this would return an error so you need to put ! sighn on the querySelector
// // or use an if statement to remove the error
// if (anchor) {
//   console.log(anchor.href);
// }
//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
//Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
