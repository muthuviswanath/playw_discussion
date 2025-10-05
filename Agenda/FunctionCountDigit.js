/*let number = 123456;
let count = 0;
while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log("Number of digits: ", count);
*/

function count_digit(number /*parameter*/){
let count = 0;
while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
}
return count;
}

let result = count_digit(234234 /*argument: value that is passed to the parameter*/);

let power = result ** 2;
console.log(`Count of the digits = ${result}`)
console.log(`Square of ${result} is: ${power}`)

