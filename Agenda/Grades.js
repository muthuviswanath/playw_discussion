// marks >=0 and <35        - Grade F
// marks >=35 and <=50      - Grade C
// marks >50 and <=60       - Grade B
// marks >60 and <=80       - Grade A
// marks >80 and <=100      - Grade A+

let marks = 75;
if (marks >=0 && marks <35){
    console.log("Grade F");
}
else if(marks >= 35 && marks <=50){
    console.log("Grade C");
}
else if(marks >50 && marks <=60){
    console.log("Grade B");
}
else if(marks >=61 && marks <=80){
    console.log("Grade A");
}
else if(marks >=81 && marks <=100){
    console.log("Grade A+");
}
else{
    console.log("Invalid marks");
}