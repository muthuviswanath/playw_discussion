// In Javascritp, arrays behave like arraylist

let myarr = ["Apple",true,12.45,345]
console.log(myarr)

// Arrays can be created as follows

// 1. using literal
let fruits = ["Apple","Orange","Pineapple"]
console.log(fruits)

// 2. using constructor
let even = new Array(2,4,6,8,10)
console.log(even)

let odd = new Array(5)
odd[0] = 11
odd[1] = 13
odd[2] = 15
odd[3] = 17
odd[4] = 19

odd.push(1)
odd.push(3)
odd.push(5)
odd.push(7)
odd.push(9)
console.log(odd)

//to find the length

console.log(odd.length)

// pop - removing the last element from the array
let colors = ["red","green","blue","yellow","orange"]
let lastelement = colors.pop()
console.log(lastelement)
console.log(colors)

//unshift - adds the element at the start of the array
let names = ["Anushka","Simran","Nayantara"]
console.log(names)
names.unshift("Rukmini")
console.log(names)

names.shift()
console.log(names)




