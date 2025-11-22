let marks = [87,95,64,50,34,43,10,89]
//filter the list on a specific condition,. Give me a list where the marks are above 60
let morethan60 = marks.filter(m => m >60)
console.log(morethan60)



let nums = [87,95,64,50,34,43,10,89,30,57]
let even = nums.filter( n => n%2 ==0)
let odd = nums.filter(n => n%2 !=0)
console.log(even)
console.log(odd)