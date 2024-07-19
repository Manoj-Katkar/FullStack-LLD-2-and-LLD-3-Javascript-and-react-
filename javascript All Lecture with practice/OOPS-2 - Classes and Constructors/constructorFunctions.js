//! Ecmascript : it is the set of the rules on which the javscript is made 

let HpLaptop = {
    name : 'HP',
    price : 25000,
    RAM : "8gb"
}

// now I have to create the laptop using the constructor 

function Laptop(name , price , RAM){
    // let laptop = {};
    this.name = name;
    this.price = price;
    this.RAM = RAM

    // ^ we can create the functions also 
    this.describe = ( )=> {
        console.log(`product Name is ${this.name} | price is ${this.price} | RAM is ${this.RAM}`);
    }


    
}


let dellLaptop = new Laptop("Dell 3014" , 45000 , "16gb");

console.log(dellLaptop);

// !now I will call teh function which is there inside the dellLaptop

dellLaptop.describe();





// !In this above ways we used to create the objects untill the ES5 at that time there was the no concept of the clases in javascript 

// ^but after ES5 the ES6 is launched they introduced the concept of the classes in javascript 
// lets see that in the new file class.js










