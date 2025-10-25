function askQuestion(question, yes, no){
           if(confirm(question)) yes();
           else no();
        }

//function call
    askQuestion('Is today Sunday?', 
                ()=>{alert('You clicked ok');},
               ()=>{alert('You clicked Cancel')});   



