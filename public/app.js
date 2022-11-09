import { Invoices } from "./classes/invoice.js";
import { ListTempelate } from "./classes/ListTempelate.js";
import { Payment } from "./classes/Payment.js";
//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
//Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//List Template Instance
const ul = document.querySelector("ul");
const list = new ListTempelate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Tuples
    let values;
    values = [tofrom.value, details.value, Number(amount.value)];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoices(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
});
