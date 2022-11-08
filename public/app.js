"use strict";
//Class
//class Initialization
class Invoices {
    constructor(c, d, a) {
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
let invoices = []; //this will only allow objects created from the class Invoices
invoices.push(invOne);
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
