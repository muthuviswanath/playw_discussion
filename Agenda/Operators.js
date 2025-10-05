/*  + - Addition
    - - Subtraction
    * - Multiplication
    / - Division
    % - Modulous / Remainder
    ** - Exponentiation

    integer (numerator)/ integer (denominator)= 
    if numerator < denominator in case of floor division we will always get 0 
    if numerator < denominator in case of % the result is numerator
*/

a = 10
b = 123
console.log(Math.floor(a/b))
console.log(a%b)

/*
Relational:
<
>
<= 
>=
!=
==
===
*/

let v1 = 2.0;
let v2 = "2";
console.log(v1==v2);
console.log(v1===v2);

count = 10
count++
console.log(count)

if(count >10 && count<100){
    console.log("Hi")
}

/*
Logical and or
&& and
|| or
*/

/*
Bit wise:
    &
    |
    ^
    ~
    <<
    >>
            &   |   ^
    a   b     
    0   0   0   0   0
    0   1   0   1   1
    1   0   0   1   1
    1   1   1   1   0


*/
a = 10
console.log(~(a))

// a = 10
// add one to the number and change the partiy
// a = 10 + 11
//   = - 11

// a = -10
//   = - 10 + 1
//     = 9

console.log(~(-10))

let username = "Senthil"
let password = null
console.log(`Username: ${username} ; Password: ${password}`)
console.log(password ?? "Unknown")
console.log(`Username: ${username} ; Password: ${password??"Password is not given"}`)