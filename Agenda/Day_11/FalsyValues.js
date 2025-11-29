let arr = [0,1,false, "", 3.5, null, "hello", undefined]

// [1,3.5,"hello"]
let non_falsy = arr.filter(value => Boolean(value))

console.log(non_falsy)


//
let users = [
    {name:"Rohan", age:17},
    {name:"Malli", age:18},
    {name:"Pradeep", age:27},
    {name:"Senthil", age:21},
    {name:"Sowmya", age:25}
]

// keep the object where the age is greater than 20

let selected_user = users.filter(u => u.age > 20)
console.log(selected_user)

let mycolors = ["green","red","yellow","black","grey","blue","orange","violet"]

//create a new array to have colours that is less than or equal to 4 characters
let filter_colors = mycolors.filter(col => col.length <= 4)
console.log(filter_colors)