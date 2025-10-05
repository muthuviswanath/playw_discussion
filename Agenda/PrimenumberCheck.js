/*
Step 1: Create a function that takes a number as input
Step 2: create a variable to store the number of factors
Step 3: Create a loop that starts from 1 and goes till the number
Step 4: Take the given number and divide it by the loop variable
Step 5: If the remainder is 0, then increment the number of factors
Step 6: After the loop check whether the value of the number of factors is exactly 2
Step 7: If the number of factors is exactly 2 then print "It is a prime number"
Step 8: Else print "It is a composite number"
Step 9: Call the function to verify
*/
function primeCheck(number){
    let factors = 0;
    for(let i=1; i<=number; i++){
        if(number % i == 0){
            factors++;
        }
    }
    if (factors == 2){
        console.log(`Given number ${number} is a prime number`)
    }
    else{
        console.log(`Given number ${number} is a composite number`)
    }
}
primeCheck(97);
primeCheck(9);