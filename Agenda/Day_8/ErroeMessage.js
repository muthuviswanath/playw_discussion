let system_message1 = "Warning! Your disk space is low"
let system_message2 = 'Error! Your disk space is full. Cannot save file'

// Check whether the message contains error or warning. If it has that then display the message
// Contact your system administrator else display the message "System is good"

function checkSystemMessage(message){
    let lower = message.toLowerCase();
    if(lower.includes("error") || lower.includes("warning")){
        console.log(message)
        console.log("Contact your system administrator")
    }
    else{
        console.log("System is good")
    }
}

checkSystemMessage(system_message1)
checkSystemMessage(system_message2)
checkSystemMessage("Left with 100 GB Space")


