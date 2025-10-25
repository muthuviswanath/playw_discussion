let person = new Object({
    name:"Muthu"
});

let emp = {
    name:"senthil"
};

function mouse(manufacturer, type){
    this.manufacturer = manufacturer;
    this.type = type;
}

let mymouse = new mouse("Dell","Wireless");
console.log(mymouse.manufacturer);
console.log(mymouse.type);

const laptop = {
    name : "Lenovo",
    year : 2019
};

const my_laptop = Object.create(laptop);
console.log(my_laptop.name);
console.log(my_laptop.year);