let user = {name:"Senthil"};
let admin = user;

admin.name = "Sowmya"

console.log(admin.name)//Sowmya
console.log(user.name)//Senthil

let a = {}
let b = a

console.log(a == b) // true
console.log(a === b) // true

let c = {}
let d = {}

console.log(c == d) // false
console.log(c === d) // false


a = 10
b = "10"

console.log(a==b)
console.log(a===b)

