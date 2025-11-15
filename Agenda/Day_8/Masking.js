let cardnumber = "1234543423437645"
//Mask the numbers except the last 4 digit using *

let length = cardnumber.length;
let last4digit = cardnumber.slice(length-4)
let maskedstring =""
for (let i =0; i<length-4; i++){
    maskedstring = maskedstring + "*"
}

maskedstring += last4digit
console.log(maskedstring)