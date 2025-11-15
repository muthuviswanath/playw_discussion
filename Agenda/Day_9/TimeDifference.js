// A time string represented as 10:15 AM - 01:00 PM
// What is the total amount of time 
// 2 hours 45 mins

function timeDiff(timeStr){
    let times = timeStr.split("-")
    let time1 = times[0].trim()
    let time2 = times[1].trim()

    function convertToMinutes(tstring){
        //time1 = 10:15 AM
        //time2 = 01:00 PM

        let t = tstring.split(" ") // ["HH:MM", "AM"]
        let hhmm = t[0] //"HH:MM"
        let ampm = t[1] // AM

        let pair = hhmm.split(":")
        let hh = Number(pair[0])
        let mm = Number(pair[1])
        
        //converting into 24 hours format
        if (hh === 12){
            hh = (ampm === "AM") ? 0 : 12
        }
        else if (ampm === "PM"){
            hh += 12
        }
        return hh * 60 + mm
    }

    let start = convertToMinutes(time1)
    let end = convertToMinutes(time2)

    let diff = end - start
    if (diff < 0) diff += 24 * 60

    // let hours = Math.floor(diff / 60)
    // let mins = diff % 60

    //return `Time elapsed: ${hours} hours and ${mins} mins`
    return `Time elapsed: ${diff} mins`
}

console.log(timeDiff("10:15 AM - 01:00 PM"))