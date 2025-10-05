//Create a program using javascript to count the number of digits in a given number.
let number = 123456;
let count = 0;
while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log("Number of digits: ", count);