import { Invoices } from "./classes/invoice.js";
import { ListTempelate } from "./classes/ListTempelate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLSelectElement;

//List Template Instance
const ul = document.querySelector("ul")!;
const list = new ListTempelate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  //Tuples
  let values: [string, string, number];
  values = [tofrom.value, details.value, Number(amount.value)];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoices(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "start");
});
