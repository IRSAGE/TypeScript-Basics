//Class

//class Initialization

//all class properties are public by default

//Public :means the property can be access anywhere
//Private :means the property can only be access inside the class
//readonly :means the property can be read outside and inside the class its self but we can't change it
import { Invoices } from "./classes/invoice.js";
//the Above declaration is same as this one below
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${amount} for ${details}`;
  }
}
//class instancite an object from the class
const invOne = new Invoices("me", "loan", 300);

let invoices: Invoices[] = []; //this will only allow objects created from the class Invoices

invoices.push(invOne);
console.log(invoices);

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
