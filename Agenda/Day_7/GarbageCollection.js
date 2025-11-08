let user = {name:"Johnny Walkers"}
let admin = user

user.age = 34
user = null
console.log(admin.age)