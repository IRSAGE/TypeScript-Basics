//Class
//class Initialization
//all class properties are public by default
//Public :means the property can be access anywhere
//Private :means the property can only be access inside the class
//readonly :means the property can be read outside and inside the class its self but we can't change it
import { Invoices } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
//the Above declaration is same as this one below
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${amount} for ${details}`;
    }
}
//class instancite an object from the class
const invOne = new Invoices("me", "loan", 300);
let invoices = []; //this will only allow objects created from the class Invoices
invoices.push(invOne);
console.log(invoices);
const me = {
    name: "Me",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
//Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoices(tofrom.value, details.value, Number(amount.value));
    }
    else {
        doc = new Payment(tofrom.value, details.value, Number(amount.value));
    }
    console.log(doc);
});
