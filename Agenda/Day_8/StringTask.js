let username = "    mUTHU VISwaNathaN"
//remove the leading and trailing spaces
//Convert it into proper case (Muthu Viswanathan)
//Count the total number of characters after removing the leading and trailing spaces

username = username.trimStart();
console.log(username)

/*Step 1: trim the space and store it in the same variable name
Step 2: Convert everything into lower case
Step 3: Use a for loop and find the first character in every word and convert it into uppercase
Step 4: join them to form a single word*/

//Step 2:
let lowercase_username = username.toLowerCase()

//Step 3:
let words_in_name = lowercase_username.split(" ")
let propercase_name = ""
for(let i=0; i<words_in_name.length; i++){
    //check for the condition that it is having characters
    if(words_in_name[i] !=""){
        //if so take the first character and convert it
        let firstChar = words_in_name[i].charAt(0).toUpperCase()
        let remaining = words_in_name[i].slice(1)
        // add that to the popercase_name    
        propercase_name += firstChar + remaining + " "
    }
}
// print the propercase_name
console.log(propercase_name)
console.log(propercase_name.length)







