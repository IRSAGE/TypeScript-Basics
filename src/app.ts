//Class

//class Initialization
class Invoices {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes £${amount} for ${details}`;
  }
}
//class instancite an object from the class
const invOne = new Invoices("me", "loan", 300);

let invoices: Invoices[] = []; //this will only allow objects created from the class Invoices

invoices.push(invOne);

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
