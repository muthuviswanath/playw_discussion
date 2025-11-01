let table = {
    dimension : "4ft x 6ft",
    make: "Wood",
    brand : "Damro",
    displayinfo : function(){
        console.log(`Table Details: Dimension: ${this.dimension} Make: ${this.make} Brand: ${this.brand}`)
    }
};

table.displayinfo();
let drawingtable = Object.create(table);
drawingtable.make = "Steel";
drawingtable.displayinfo();