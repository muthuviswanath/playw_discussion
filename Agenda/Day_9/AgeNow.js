function ageDifference(d1, d2){
    let start = new Date(d1)
    let end = new Date(d2)

    let years = end.getFullYear() - start.getFullYear() // 2025 - 1984 = 41
    let months = end.getMonth() - start.getMonth() // 11 - 5 = 6
    let days = end.getDate() - start.getDate() // 15 - 16 = -1

    if (days < 0){
        months--;
        let prevMonth = new Date(end.getFullYear(),end.getMonth(),0).getDate()
        days += prevMonth //(-1 + 31 = 30)

    }

    if(months < 0){
        years--;
        month += 12
    }

    return {years, months, days}

}
console.log(ageDifference("1984-05-16", "2025-01-15"))



/*

end.getFullYear() = 2025
end.getMonth() = 'October' - MonthIndex - 9, 1 = 1St october
 end.getMonth() = 'October' - MonthIndex - 9, 0 = 30th September

*/