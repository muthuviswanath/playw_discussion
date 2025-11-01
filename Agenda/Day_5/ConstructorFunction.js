function Car(make, model){
    console.log(`Make: ${make}, Model: ${model}`);
}

Car("Toyota", "Camry"); // Regular function call


function Laptop(brand, cost){
    this.brand = brand;
    this.cost = cost;
    this.displayInfo = function(){
        console.log(`Brand: ${this.brand}, Cost: ${this.cost}`);
    }
}

let myLaptop = new Laptop("Lenovo",55000);
myLaptop.displayInfo();

