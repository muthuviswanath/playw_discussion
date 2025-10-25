//Single line arrow function

let result = (a,b) => a ** b;
console.log(result(2,7));

let square = n => n**2;
console.log(square(5));

let greet = () => "Hi all";
console.log(greet());

// Multiline Arrow Functions

let sum = (a,b) =>
{
    console.log("This is a multiline arrow function");
    return a+b;
};
console.log(sum(10,20));