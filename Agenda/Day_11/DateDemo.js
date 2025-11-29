let today = new Date()
//Date Time zone
console.log(today)
let senthil_bday = new Date(1947,7,15)
console.log(senthil_bday)

// 0 represent the first month
// 1 - Feb

let saturday = new Date()
console.log(saturday.toLocaleString("en-IN",{
    timeZone: "Asia/Kolkata"
}));
console.log(saturday)


let todays_data = new Date(2025,1,23);
console.log(todays_data.toLocaleString("en-US", {
    weekday : "long",
    year : "numeric",
    month: "long",
    day:"2-digit",
    timeZone : "Asia/Kolkata"
}))

// Nov 22, 2025

console.log(todays_data.toLocaleString("en-IN", {
    weekday: "narrow",
    month: "short",
    day:"2-digit",
    year : "numeric",
    timeZone: "Asia/Kolkata"
}))
