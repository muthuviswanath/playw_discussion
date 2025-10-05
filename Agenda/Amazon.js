/*
If the user is male and above 35 and using credit card for payment, then give 50% discount
If the user is paying using othe payment options, then give 65% discount

If the user is female and above 35 and using credit card for payment, then give 45% discount
If the user is paying using othe payment options, then give 65% discount

*/
user_gender = "male";
user_age = 35;
user_payment_method = "credit card";

if(user_gender === "male"){
    if(user_age >= 35){
        if(user_payment_method === "credit card"){
            console.log("50% discount");
        }
        else{
            console.log("65% discount");
        }
    }
    else{
        console.log("Discount not applicable as you age is below 35")
    }
}
else if(user_gender === "female"){
    if(user_age >= 35){
        if(user_payment_method === "credit card"){
            console.log("45% discount");
        }
        else{
            console.log("65% discount");
        }
    }
    else{
        console.log("Discount not applicable as you age is below 35")
    }
}
else{
    console.log("Discount not applicable")
}