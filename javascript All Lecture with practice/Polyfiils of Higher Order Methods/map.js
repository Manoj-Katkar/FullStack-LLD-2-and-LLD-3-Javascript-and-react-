// !implementing polyfill of the map inbuilt iterating method of the array 

let arr1 = [ 10 ,20,, 45];


 //*this is known as the sparse array means index is there but at that index element is not there 

// let arr1 = [10 ,  , 30 , 45]; 




//^first lets see how the normal map function executes or how it works so it will become easy to understand in depth 
//! in the call back function of the map this keyword will represent to the empty object because it is arrow function so we will normal function


//creating the one object so I can pass its key as the thisArgs value in the inbuilt map function

const multiplierObj = {
    num : 2
}



// let mapArray1 = arr1.map((currentElement , currentIndex , originalArray) => {

//     //^here this is = empty object because this keyword is not binded to the arrow function it takes the value from its lexical parent which is in node empty 

//     console.log("from arrow function : " , this);  //*here it is going to be the empty object because it is not a normal function it is arrow function 
// })



let mapArray = arr1.map(function(currentElement , currentIndex , originalArray){

    //lets multiply the each number by num 
    // console.log(this);      //*here it is denoting to thisArgs
    let newElement = currentElement * this.num;  

    return newElement;

} , multiplierObj);   //*here map function gives the power that to set the value of this keyword by passing as its second parameter that is thisArg



//^lets print the original array as well as the map function returned array 

console.log( "original Array : ", arr1);
console.log( "inbuilt map  Array : ", mapArray);
// console.log(mapArray1);


//!Test cases I need to take care while implementing map() polyfill
/**
 * *1)map take two arguments : 
 *                              i)call-back function
 *                              ii)thisArgs value (which will used to set the this keyword value in the callback function )
 * 
 * *2) map function creates the new Array : 
 */



// !implementing the map function polyfill 

Array.prototype.myMap = function(callback , thisArgs){
    //callback should be the function 

    if(typeof callback !== 'function'){
        //return the error
        throw new Error(callback , " is not a function");
    }

    let result = [];

    //now the map function iterate over the each and eveey element and call the callback function
    //here this = current array  
    for(let i = 0 ; i < this.length ; i++){
        //now here I have to make one check that element that I am going to pass that should be contain in the array 
        if(i in this){
            //means at ith index if there is element is there then only it will get execute 

            //one more edge case thisArgs should get point out when I am calling the callback function 
            
            //*ternary operator if context is = thisArgs keep as it is or else take the default this value 
            var context = thisArgs ? thisArgs : this;  //means if it is thisArgs take it otherwise take the default one 

            //now while calling the callback I have to set the this to point to the context I can use call or apply 

            var mappedValue = callback.call(context , this[i] , i , this);
            result.push(mappedValue);
        }
        else{
            //push the empty element 
            //note that JSON does not support sparse arrays. I.e. you cannot see empty slots with JSON.stringify
            //!so I can not able to push I have to simply increment the length of the my current Array 

            result.length++;
        }

    }

    return result;

}



let myMapArray = arr1.myMap(function(currentElement , currentIndex , originalArray){
    //lets multiply the each number by num 
    // console.log(this);      //*here it is denoting to thisArgs
    let newElement = currentElement * this.num;  

    return newElement;

} , multiplierObj);

console.log("MyMap Array : " , myMapArray);





