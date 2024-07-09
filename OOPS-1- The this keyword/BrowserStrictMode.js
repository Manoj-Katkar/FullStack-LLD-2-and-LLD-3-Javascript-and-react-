
"use strict";


//! Case 1: Global Context
console.log("GLobal context | THIS : ", this)  //*refers to window object 

//! Case 2: Function context
function func() {
    console.log("Function context | THIS : ", this) //*refers to undefined
}
func()

//! Case 3: Object method
const obj1 = {
    name: 'name',
    func: function() {
        console.log("Object method | THIS : ", this)  //*refers to entire obj1 current object 
    }
}

// obj1.func()

//! Case 4: Nested method
const obj = {
    name: 'name',
    func: function() {
        function func2() {
            console.log("Object method | THIS : ", this)   //*refers to undefined
        }
        return func2
    }
}
// obj.func()();


// console.log(obj.func()())  //*it will be undefined because the inner function is not returning any value default return type 

// const nestedFunc = obj.func()
// nestedFunc()



// !In arrow function 

let arrowFun = () => {
    console.log("I am from Arrow function " , this);     //*refers to the window object only 
}

arrowFun();



// ^Very Important note 


// !key point in the browser non strict mode this in normal function and in arraow function in both it will refer as  the window object 
// ^But 
// !In strict mode this in arrow function only refer to as the window object but in any another function it will refer to the undefined




