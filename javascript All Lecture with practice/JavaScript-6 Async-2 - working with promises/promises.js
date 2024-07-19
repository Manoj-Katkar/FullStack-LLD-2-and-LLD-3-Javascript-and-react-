// ! What is Promises 
/**
 * *In javascript , promise is an object representing the Eventually complition or failure of an Async Task 
 */

// !when we will get the promise 
// *Means when the Javascript running the code and it encounters the heavy task then js will does not execute that task in return it gaves you the promise which represent the eventually complition or failure 



// !How to create the promises in javascript 
/**
 * * it expects the call back and that call-back takes the two arguments 
 * * (resolve , reject)
 */

let coinTossPromise = new Promise((resolve , reject) => {

    let a = 11;
    let b = 10;

    // ^ this is how I can Move to the differant states of the promise 
    if(a == b){
        resolve("Value is equal");
    }
    else{
        reject("Value is Not equal");
    }
});

console.log(coinTossPromise);

// ! we have three functions 
/**
 * & both are higher order functions
 * * 1)then() : if the promise is resolved then , then() function call back logic will executed 
 * * 2)catch() : if my promise is rejected then in the catch function I have to write what too execute inside the callback
 * 
 * * 3) finally() : if the my promise is settled means either it resolved or rejected then it will go into the setttled stage 
 * *                then what to do when it gone into the settled stage that we can write the logic using the finally HOF with its callback
 */


console.log(coinTossPromise);

// !now writing the then and catch 

coinTossPromise.then((result) => {     //&if promise got resolved then this then will executed          
    console.log(result);
});


coinTossPromise.catch((result) => {   //&if promise got rejected then this catch will executed 
    console.log(result);
});

coinTossPromise.finally((result) => {  //~result is here undefined so no need to take it in the call back 
    console.log("Promise Settled");
});




