/*A car rental company wants to display the data about the car rental.
Create a class called RentalCars and make sure the class is having
the properties brand and perdayrental. Initialize the variables
using the constructor. create a method called rentalInfo and display
the details.
*/

class RentalCars{
    brand;
    perdayrental;

    constructor(brand, perdayrental){
        this.brand = brand;
        this.perdayrental = perdayrental;
    }

    rentalInfo(){
        console.log(`The car ${this.brand} is available for a rent of Rs. ${this.perdayrental}`);
    }
}

let Jaguar = new RentalCars("Jaguar",2345.67);
let Audi = new RentalCars("Audi",23445.67);

Jaguar.rentalInfo();
Audi.rentalInfo();