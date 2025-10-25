function powers(base, exponent){
    let result = 1;
    exponent = Math.abs(exponent)
    for(let i=1 ;i<= exponent ;i++){
        result *= base; // result = result * base
    }
    return result;
}

result = powers(2,-7);
console.log(result)