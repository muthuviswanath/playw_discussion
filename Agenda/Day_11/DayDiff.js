let today = new Date()
let tomorrow = new Date("2025-11-23")

let diff = tomorrow - today

let totalsec = Math.floor(diff/1000)
let hours = Math.floor(totalsec/3600)
let minutes = Math.floor((totalsec % 3600) / 60)
let secs = totalsec % 60
console.log(`Hours: ${hours} Minutes: ${minutes} Seconds: ${secs}`)

// Create a date object and create a method called as getWeekday which takes the date as input
// display the weekday in the following Format "Mo" = monday "Tu" tuesday

function getWeekday(date){

}

//for any give date, get the last date of the month. Important note: check for leap year also
function getLastDate(year, monthnumber){


}

getLastDate(2012,1) = 29
getLastDate(2025,1) = 28