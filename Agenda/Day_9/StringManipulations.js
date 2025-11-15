let Birthday = "1984-05-16"
let currentDate = "2025-11-15"
// find the Date Difference between Birthday and currentDate in years, months, and days

function dateDifference(dateString1, dateString2){
let fd = new Date(dateString1)
let sd = new Date(dateString2)
if(isNaN(fd) || isNaN(sd)) return null
    let milliseconds = 60 * 60 * 24 * 1000
    diff = Math.abs(sd - fd)
    days = Math.floor(diff/milliseconds)
    return Math.floor(days/365) + " years"
}


console.log(dateDifference("2025-11-14", "2025-11-15"))
console.log(dateDifference(Birthday, currentDate))