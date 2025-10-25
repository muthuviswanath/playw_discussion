
let employee = {
    name : "Muthu",
    age : 41,
    empid : 123,
    salary : 45334.05,

    display: function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.empid);
        console.log(this.salary);

    }
};

employee.display();


let student = new Object({
    name:"Mohan",
    age:34
})
console.log(student.name);
console.log(student.age);
