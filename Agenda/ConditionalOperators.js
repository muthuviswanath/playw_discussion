let age = 18;
// if (age >= 18){
//     console.log("Adult")
// }
// else{
//     console.log("Not Adult")
// }

// console.log((age >= 18) ? "Adult" : "Not Adult")

//Multiple ? to handle if else-if

/* 
if age <=10 baby
else if age >10 && <18 Toddler
else if age >=18 Adult
else
*/

let user_age = -153
console.log((user_age>=0 && user_age<=10)? "Baby" : (user_age >10 && user_age <18) ? "Toddler":(user_age >=18)? "Adult": "Unusual Age");