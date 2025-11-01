let employee = new Object(); // Object Constructor
employee.name = "Santosh";
employee.age = 30;
employee.designation = "Manager";
employee.greet = function(){
    console.log(`Hello, I am ${this.name}, working as ${this.designation} and I am ${this.age} years young.`);
}

employee.greet();

employee.name = "Sowmya";
employee.age = 28;
employee.designation = "Team Lead";
employee.department = "IT";
employee.salary = 75000;
employee.greet = function(){
    console.log(`Hi, I am ${this.name}, working as ${this.designation} in ${this.department} 
        department with a salary of ${this.salary}.`);
}
employee.greet();