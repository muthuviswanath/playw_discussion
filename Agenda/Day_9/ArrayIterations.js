// Array Iterations:

//classical for loop
let heros = ["Rajnikanth","Kamal","Punith Rajkumar","Balayya","Yash","Rishabh Shetty"]
for (let i = 0; i< heros.length; i++){
    console.log(i+1,". ",heros[i])
}

// for of loop

for (let hero of heros){
    console.log(hero)
}

//forEach method()

heros.forEach(function(elements){
    console.log(elements)
})

// for in
for (index in heros){
    console.log(heros[index])
}

// use for in only with respect to Object and not with respect to iterables like arrays
// in is used to represent a member

// using map()
// recommended when a new array needs to be formed using the existing array
// if there is a need for transforming the data

let my_nums = [1,2,3,4,5]
let doubled_nums = my_nums.map( n => n*n )
console.log(doubled_nums)