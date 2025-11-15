let a = Symbol("1")
let b = Symbol("1")

console.log(a == b)


let id = Symbol("id")
let user = {
        name: "Senthil",
        [id] : 101
};

console.log(user.name)
console.log(user[id])
console.log(Object.keys(user))

const RED = Symbol("RED")
const GREEN = Symbol("GREEN")
let BLUE1 = Symbol("BLUE")
let BLUE2 = Symbol("BLUE")

function getColorCode(color){
    switch(color){
        case RED: return "#FF0000";
        case GREEN: return "#00FF00";
        case BLUE1: return "#0000FF";
        case BLUE2: return "#74ccffff"
    }
}

console.log(getColorCode(BLUE2))