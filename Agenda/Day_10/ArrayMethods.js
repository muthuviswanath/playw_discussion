let arr1 = [1,2,3,4,5,6,7,8,9,11,21,32,43,54]
console.log(arr1.join(", "))
delete arr1[6]
console.log(arr1.join(", "))

let arr2 = [1,2,3,4,5,6,7,8,9,11,21,32,43,54]
console.log(arr2.join(", "))
arr2.splice(6,4)
console.log(arr2.join(", "))

//instead of the numbers 7, 8, 9 and 11 i want 99,98,97,96
let arr3 = [1,2,3,4,5,6,7,8,9,11,21,32,43,54]
console.log(arr3.join(", "))
arr3.splice(6,4,99,98)
console.log(arr3.join(", "))

// Insert one number inbetween 9 and 11
let arr4 = [1,2,3,4,5,6,7,8,9,11,21,32,43,54]
console.log(arr4.join(", "))
arr4.splice(arr4.indexOf(11),0,9999,8888,5555,3333)
console.log(arr4.join(", "))
arr4.splice(-2,0,"Senthil")
console.log(arr4.join(", "))

let name = "muthu"
name = name.concat(",")
console.log(name)

let namelist = ["Senthil","Muthu","Santosh","Sowmya"]
// namelist = namelist.concat(", ")
console.log(namelist)
console.log(namelist.join(" # "))

// you are running as 3 person in the race if santhosh overtakes you in which position santhosh will run?
let n = ["Santhosh","Muthu"]
n.splice(-1,0,"Senthil")
console.log(n)
n.push("Sowmya")
console.log(n)

//finding an element in the array

//1. indexOf
//2. lastIndexOf
//3. includes

let namelist_new = ["Senthil","Muthu","Santosh","Sowmya","Santosh"]
console.log(namelist_new.includes("Santosh")) // return the index value or -1