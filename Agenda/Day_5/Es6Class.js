class Student{
    name;
    course;
    college;
    marks;

    //cannot declare the properties using let or const or var inside the class

    constructor(name, course, college, marks){
        this.name = name;
        this.course = course;
        this.college = college;
        this.marks = marks;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Course: ${this.course}, 
            College: ${this.college}, Marks: ${this.marks}`);
    }
}

let student1 = new Student("Santosh", "Ph.D", "Oxford University", 99.96);
student1.displayInfo();

class Product{

    //Every class comes with an automatic constructor called default constructor
    // Default constructor doesn't take any argument. It is a non-parameterized constructor
    
    prodId;
    prodName;
    prodPrice;

    displayInfo(){
        console.log(`ProdId: ${this.prodId}; ProdName: ${this.prodName}; ProdPrice: ${this.prodPrice}` )
    }
    
}

let mouse = new Product();
mouse.prodId = 10;
mouse.prodName = "Wireless Mouse";
mouse.prodPrice = 745.45;
mouse.displayInfo();
