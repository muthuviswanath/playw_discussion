//Object Literal
// value that is assigned to a variable is called as a literal
let person ={
    //properties or fields
    // key and value pair
    name: "Senthil",
    age : 20,
    designation: "Developer",
    //method or functionality
    greet: function(){
        console.log("Hello Everyone");
    }
}

person.greet(); // Invoking the method
console.log(person.name)
console.log(person.age)
console.log(person.designation)

person.name = "Muthu";
person.age = 41;
person.designation = "Student";

console.log(person.name)
console.log(person.age)
console.log(person.designation)
person.greet();
person.greet = function(){
    console.log("Bye");
}
person.greet();


//reinitialize the value of person
person = 45;
console.log(person);


/*
let a = 10; //variable declaration and initialization
a = 45; //reinitialization
let a = 50; // this will give error

var b = 35; //variable declaration and initialization
b = 100; //reinitialization
var b = 200;// redeclaration and initialization

const g = 234;
//this cannot be reinitialized or redeclared
*/