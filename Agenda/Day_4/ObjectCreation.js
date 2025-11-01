/*
Objects can be created in 7 different ways
*/
//Object Litreal

const person = {
    age : 10,
    name : "Muthu",
    greet : function(){
        console.log("Hello");
    }
}
person.name = "Senthil"
console.log(person.name);
console.log(person.age);
person.greet();

//Create the object using new Object()

let emp = new Object();
emp.name = "Senthil";
emp.age = 12;
emp.welcome = function(){
    console.log("Welcome");
}

console.log(emp.name);
console.log(emp.age);
emp.welcome();

emp = 1234;
console.log(emp); //number


//Constructor Function:
function Participants(name, age){
    this.name = name;
    this.age = age;
    this.infor = function(){
        console.log("Welcome to the world of JavaScript");
    }
}


let participants_1 = new Participants("Sowmya",23);
console.log(participants_1.name);
console.log(participants_1.age);
participants_1.infor();

Portfolio = {
    name: "Sowmya",
    role: "Developer",
    task: function(){
        console.log("Complete the project");
    }
}

let sowmyas_portfolio = Object.create(Portfolio);
console.log(sowmyas_portfolio.name);
console.log(sowmyas_portfolio.role);
sowmyas_portfolio.task();