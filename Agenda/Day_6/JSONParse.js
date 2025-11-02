/* JSON - JavaScript Object Notation*/
/* {
        name: "Sowmya",
        designation: "CEO"

    } 


*/

let jsonString  = '{ "name": "Sowmya", "designation" : "CEO"}';
let user = JSON.parse(jsonString)

console.log(user.name);
console.log(user.designation);
user.greet = function(){
    console.log(`${this.name} is the ${this.designation} of Microsoft`);
}

user.greet();


