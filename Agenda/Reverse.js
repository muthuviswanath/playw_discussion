function reverseNumber(number){
    let reverse = 0;
    while(number !=0){
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number/10);
    }
    console.log("Reverse of the given number is: " + reverse);
}

reverseNumber(1234);