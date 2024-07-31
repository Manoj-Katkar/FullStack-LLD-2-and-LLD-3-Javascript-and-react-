// !Agenda 
/**
 * *1)this keyword
 * *2)this keyword in "strict" mode
 * *3)this keyword in browser 
 * *4)this keyword in node js 
 * *5) this keyword in arrow function
 */

//! because of the strict behviour we can use the this keyword in the 4 combinations becomes
/**
 * *1)browser strict mode 
 * *2)browser non - strict mode 
 * *3)node-js strict mode 
 * *4)node-js - strict mode 
 */




// "use strict";

console.log(this);  //*refers to the window object 



// a = 10;

// console.log(a);  //in strict mode it will throw error 

function abc(){
    console.log(this); 
}

// abc();

let car = {
    name : "safari",
    speed : function (){
        // console.log(this);
        console.log(this);  //*refer the entire car object 
        function tuv(){
            console.log("it is nested this " , this);
        }

        return tuv;

    }
}

// car.speed();
car.speed()();
