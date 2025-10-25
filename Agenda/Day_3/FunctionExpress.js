let greetings  = function(){
    console.log("Hi");
};

greetings();

var greet = function(){
    console.log("Hello");
};

function test(){
    var greet = function(){
        console.log("Good Bye");
    };
    greet();
}
greet();
test();