// ! What is Async/Await : this two separate are the keywords in javascript 

const { reject, log } = require("async");

/**
 * * if I want to perform some set of lines of code in Async Fashion then I have to use the (Async Keyword )
 * 
 * * but with the help of the Await keyword I can have the control if there are some line of code I want to perform in the Sync Fashion 
 * 
 * * Means Making async operations in Serial 
 */


// !How to set the some set of the lines as the Async Fashioon so it will get executed Asynchronouslly 



// const fetchData = () => {     
//     // ?make the api call but for referance we will return some value 

//     return "data";
// }

// let data = fetchData();   //simpply it will return the value as data 
// console.log(data);






// const fetchData = async () => {     //*here I have added the keyword async 
//     // ?make the api call but for referance we will return some value 

//     return "data";
// }

// let dataPromise = fetchData();    //* when I added the keyword async then it will return the promise 

// console.log(dataPromise);


//! IMP
/**
 * * async : async function always returns the promise 
 */

// Now I wanted to get the only data from the promise 

// dataPromise.then((data) => {
//     console.log(data); 
// })


// !Async function returns the one promise that I have created not bydefualt vala then what is going to be the Ans 

const promise = new Promise((resolve , reject) => {
    // I will intentionally resolve the promise 
    resolve ("promise resolved");
})


const fetchData1 = async () => {     //*here I have added the keyword async 
    

    return promise;
}

let dataPromise1 = fetchData1();    //* when I added the keyword async then it will return the promise

console.log(dataPromise1);      // *Here I got the Promise inside the one promise which is in pending stage that is = Promise { <pendin`g> } 


// ! to get the resolve value of that promise I have to use then()

dataPromise1.then((result) => {
    console.log(result);        //* here I will get promise resolved
});

// !Now I wanted to check that is my promise got into the settled stage or Not so for that I have to use finally()     hof

dataPromise1.finally(() => {
    console.log("My promise got settled SuccessFully");
})

/**
 * & if your function is returning the promise then we will get the pending promise 
 * ! and if we want to get the resolved value of that returned promise then we have to use the then() HOF
 */