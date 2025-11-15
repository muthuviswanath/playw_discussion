let email = "muthuviswanath@heartiestmind.com"
//Wahtever is present after the @ symbol
let domain = email.slice(email.indexOf("@")+1)
console.log(domain)

let words = email.split("@")
console.log(words[1])