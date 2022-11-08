//Functions

let great: Function;
great = () => {
  console.log("Hello");
};

great();
const add = (a: number, b: number, c: number | string = 10) => {
  //optional parameters should always puted on the end
  console.log(a + b);
  console.log(c);
};

add(5, 4); //this will work
add(5, 4, 20); //as well this one also

//specifying the return type of the function
const minus = (a: number, b: number): number => {
  return b - a;
};
