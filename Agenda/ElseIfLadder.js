// 0 to 100 - range of values
// 0 - 5 => free ticket
// 6 - 16 => 1/2 fare
// 16 - 59 => Full fare
// 60 - 100 => Senior citzen concession
// 100 and above => Invalid age

// if else if

let age = -161
if(age >=0 && age <=5){
    console.log("Free ticket");
}
else if(age >=6 && age <=16){
    console.log("Half of the total fare");
}
else if(age >16 && age <60){
    console.log("Full fare");
}
else if(age >=60 && age <=100){
        console.log("Senior Citizen Concession");
    }
else{
    console.log("Invalid Age")
}