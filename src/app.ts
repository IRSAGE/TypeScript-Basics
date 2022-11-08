// //The Dom & Type Casting
// const anchor = document.querySelector("a")!;
// console.log(anchor.href); //this would return an error so you need to put ! sighn on the querySelector
// // or use an if statement to remove the error
// if (anchor) {
//   console.log(anchor.href);
// }

//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLSelectElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.value);
});
