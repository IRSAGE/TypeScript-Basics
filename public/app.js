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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoices(tofrom.value, details.value, Number(amount.value));
    }
    else {
        doc = new Payment(tofrom.value, details.value, Number(amount.value));
    }
    list.render(doc, type.value, "start");
});
