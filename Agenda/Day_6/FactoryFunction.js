function createBook(title, author){
    return {
        title,
        author,
        display(){
            console.log(`${this.title} is written by ${this.author}`);
        }
    };
}

let two_states = createBook("Two States","Chetan Bhagath")
two_states.display()

// console.log(two_states.title);


// let product = {
//         title,
//         author,
//         display(){
//             console.log(`${this.title} is written by ${this.author}`);
//         }
// };

// product.display()


/* int calcualte(int a, int b){
    int c= a+b;
    return c;

    return a+b;
}
*/