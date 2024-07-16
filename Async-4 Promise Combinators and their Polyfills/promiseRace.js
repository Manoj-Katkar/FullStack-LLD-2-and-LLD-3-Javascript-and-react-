/**
 * 
 * ! 1)Promise.race() : 
 * *                1) it will also return the combined promise 
 * *                2)here the state of the combined promise is depend on the any one promise from the list which will first get resolved or rejected so that will be the state of the combined promise also 
 * 
 * 
 * ^               Syntax = combinedPromise = Promise.race([promise-1 , promise-2]);
 * 
 * ^               Note : here the combined promise will have the either data or result in it 

 */


function fetchUserData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            //after 1 second resolve the promise and return the object 
            resolve({userId : 1 , userName : "sanchittanwar7"})

        } , 1000);
    })
}



// function fetchUserPosts(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             //after 1 second resolve the promise and return the list 
//             resolve(["Post1" , "Post2" , "Post3" , "Post4"]);
            

//         } , 3000);
//     })
// }


function fetchUserPosts(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            //after 1 second resolve the promise and return the list 
            // resolve(["Post1" , "Post2" , "Post3" , "Post4"]);
            reject("Unable to retrive user posts");

        } , 3000);
    })
}


//apply the promise combinators on the above promises 
//from the list whicever the first promise either it will get resolved or rejected that will be state of the combined Promise in the Promise.race()

// Promise.race([fetchUserData() , fetchUserPosts()])
//                 .then((result) => {
//                     console.log(result);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })



                
//!we can use the below syntax also 
//if the for the multiple promises from the list we are having the same timers to get the data from backend then whichever we are passing first in the Promise.race() that will get either resolved or reject and that will be the sate of t he combined promise also 


// let combinedPromise = Promise.race([fetchUserData() , fetchUserPosts()])



// combinedPromise
//                 .then((result) => {
//                     console.log(result);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })







//!creating the replica of the Promise.race()

Promise.myRace = function(promisesArray){

    //Approach 
    //first check that promisesArray should be the Array only otherwise throw the error
    //then check that promisesArray should not be empty Array 
    //then Main logic 
    //return the combined Promise 
    //it shoul;d get resolved or rehect on the basis of the first promise which will get either resolved or reject from the omisesArray 

    //first check that promisesArray should be the Array only otherwise throw the error
    if(Array.isArray(promisesArray) === false){
        throw new Error("Promises passed are not in the Array format");
    }


     //then check that promisesArray should not be empty Array 
     if(promisesArray.length === 0){
        // means the user is passed the empty Array and on the empty Array Promise.race() will not work 
        throw new TypeError('Promise.race on empty Array is not possible');
     }



     //*Now main logic 
    //return the combined Promise 
    //it should get resolved or rehect on the basis of the first promise which will get either resolved or reject from the omisesArray 

    return new Promise((resolve , reject) => {
        //now iterate over the each promise from the promises Array and try to resolve it 
        //if any one out from the promisesArray will get first resolved or rejected in the race that will be the state of the combined promise also 

        promisesArray.forEach((currentPromise , currentIndex) => {
            //try to resolve the each promise 
            Promise.resolve(currentPromise)
                                        .then((result) => {
                                            //then the combined promise will also get resolved with the current promise result 
                                            resolve(result);
                                        })
                                        .catch((error) => {
                                            // /then the combined Promise will also get rejected in the race 
                                            reject(error);
                                        })
        })
    })


}


//calling the my polyfill for the Promise.myRace() method 


let combinedPromiseMyRace = Promise.myRace([fetchUserData() , fetchUserPosts()])



combinedPromiseMyRace
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                })