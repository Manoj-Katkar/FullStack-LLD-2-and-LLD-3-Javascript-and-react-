// !it is blueprint to create the objects which will have the states and behaviour  

// *states/attributes : means what the object can have attributes 
// *behaviour/methods : means what object can do action 

// !Why we need the classes if there are constructor functions are already there 
/**
 * ^Reasons we need the classes are : 
 * ~                                0)to perform the opps principals 
 * ~                                1)to perform the inheritance 
 * ~                                2)for data hiding using the private keyword to implement the Encapsulation 
 * ~                                3)Abstraction hiding the logic of our application 
 */


// !constructor : one class can have only one constructor in javascript 



class vehical{
    constructor(manufacturerName, carName , price , mileage){

        this.manufacturerName = manufacturerName;
        this.carName = carName;
        this.price = price;
        this.mileage = mileage;

        // ^if we will create the function here then it will get attached to the all the objects so do not follow that approach its always better to create the function outside the constructor so we will have the only one copy of the method for all objects 

    }


    //*behaviours 
    // ^this below are the Prototype functions  
    describe(){
        console.log(`product Name is ${this.manufacturerName} | carname is ${this.carName} | price is ${this.price}`);  
    }
}

let car1 = new vehical("Tata" , "Safari" , 1500000, 20);

console.log(car1);

car1.describe();







// car1




















