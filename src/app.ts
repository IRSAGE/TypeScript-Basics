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

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoices(tofrom.value, details.value, Number(amount.value));
  } else {
    doc = new Payment(tofrom.value, details.value, Number(amount.value));
  }
  list.render(doc, type.value, "start");
});
