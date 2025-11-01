class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    display(){
        console.log(`Product Name: ${this.name}, Price: ${this.price}`);
    }
}

laptop = new Product("Lenovo LOQ",55000);
laptop.display();
console.log(laptop.name);
console.log(laptop.price);