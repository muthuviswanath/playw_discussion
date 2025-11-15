let system_message1 = "Warning! Your disk space is low"
let system_message2 = 'Error! Your disk space is full. Cannot save file'
if(system_message1.toLowerCase().includes("error")){
        console.log(system_message1)
        console.log("Contact your system administrator")
    }
else if(system_message1.toLowerCase().includes("warning")){
        console.log(system_message1)
        console.log("Contact your system administrator")
    }
    else if(system_message2.toLowerCase().includes("error")){
        console.log(system_message2)
        console.log("Contact your system administrator")
    }
    else if(system_message2.toLowerCase().includes("warning")){
        console.log(system_message2)
        console.log("Contact your system administrator")
    }
    else{
        console.log("System is Good")
    }