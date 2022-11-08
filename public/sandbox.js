"use strict";
//Functions
let great;
great = () => {
    console.log("Hello");
};
great();
const add = (a, b, c = 10) => {
    //optional parameters should always puted on the end
    console.log(a + b);
    console.log(c);
};
add(5, 4); //this will work
add(5, 4, 20); //as well this one also
//specifying the return type of the function
const minus = (a, b) => {
    return b - a;
};
