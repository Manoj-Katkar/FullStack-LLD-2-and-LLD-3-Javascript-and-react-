"use strict";


//! Case 1: Global Context
// console.log("GLobal context | THIS : ", this)  //*refers to empty object 

//! Case 2: Function context
function func() {
    console.log("Function context | THIS : ", this) //*refers to  undefined
}
func()

//! Case 3: Object method
const obj1 = {
    name: 'name',
    func: function() {
        console.log("Object method | THIS : ", this)  //*refers to entire obj1 current object 
    }
}

obj1.func()

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

console.log(obj.func()());

// const nestedFunc = obj.func()
// nestedFunc()