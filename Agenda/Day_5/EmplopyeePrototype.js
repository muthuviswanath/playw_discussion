/*A software company is building a role-based access control system for its internal tools. 
They want to define a base prototype object containing shared methods (like logging in), and 
then allow specific user roles (like Admin, Manager, or Employee) to inherit and extend these behaviors.

Problem Definition:

You are asked to implement a simple prototype-based inheritance model using Object.create().
The base object userProto should have a login() method.
Each user (Admin, Manager, Employee) created from this prototype must have its own name and role properties.

When the login() method is called, it should print:

<role> <name> has logged in.


For example:

Admin Robert has logged in.

Technical Requirements:

Define a prototype object userProto containing the login() method.

Use Object.create(userProto) to create individual user objects.

Assign name and role properties to each user.

Call the login() method on each object to display the appropriate message.

Expected Output:
Admin Robert has logged in.
Manager Alice has logged in.
Employee John has logged in.

let userProto = {
    role:"default",
    name:"username",
    login : function(){
        console.log(`${this.role} ${this.name} has logged in`)
    }
}
*/

let userProto = {
    role:"default",
    name:"username",
    login : function(){
        console.log(`${this.role} ${this.name} has logged in`)
    }
}

let adminuser = Object.create(userProto);
adminuser.role = "Admin";
adminuser.name = "Robert";
adminuser.login();

let manageruser = Object.create(userProto);
manageruser.role = "Manager";
manageruser.name = "Alice";
manageruser.login();

let empuser = Object.create(userProto);
empuser.role = "Employee";
empuser.name = "John";
empuser.login();