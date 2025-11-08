/*Create an object called calculator with three methods
read() => prompts for two values and save them as object properties with the names a and b respectively
sum() => return the sum of saved values
mul() => multiplies the value and returns the result
*/


let calculator = {

    sum(){
        return this.a + this.b
    }
,
    mul(){
        return this.a * this.b
    }
,
    read(){
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);
    }
};

calculator.read();
alert(calculator.sum())
alert(calculator.mul())