/*Declare and initialize the array with student marks and find the following:

1. Total marks in the class
2. Average marks in the class
3. Top 3 marks in the class
*/

let student_marks = [87,65,76,98,54,40]
let total = 0
for(let i=0; i<student_marks.length; i++){
    total += student_marks[i]
}

console.log("Total Marks: " + total)
console.log("Average: " + (total/student_marks.length))

let sorted_marks = student_marks.sort((a,b) => b-a)
let top_3 = sorted_marks.slice(0,3)
console.log("Top 3: " + top_3)