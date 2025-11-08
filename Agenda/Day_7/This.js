function createUser(){
    return {
        name: "Muthu",
        ref : this
    };
}

let user1 = createUser();
console.log(user1.ref.name)


function makeUser(){
    return{ name : "Senthil",
            ref() {
                return this;       
            }
         };
}

user2 = makeUser()
console.log(user2.ref().name)
