/**
* 
 * ! 1)Promise.all() : 
 *                  suppose we will have the two promises for the instagram user account example 
 *                                  *i) (promise-1) first to fetch the user data from the backend 
 *                                  *ii) (promise-2) second to fetch all user posts from the server 
 *          
 * 
 *       ^Syntax = combinedPromise = Promise.all([promise-1 , promise-2]);
 * 
 * 
 *!       KeyPoints to remaimber :
 **                 i) Promise.all() will return the promise but it will be combined promise 
 **                 ii) it will take the list of promises in the form of the Array 
 **                 iii)if any one promise get rejected then combined promise will also get rejected for Promise.all()
 **                 iv) if all promises succeed , then combined promise get fullfilled means resolved to list of the results from each promise whatever 
 *                  *they are returning that will get stored in the list format 
 **                 v) return type is the list of all the promises data [data1 , data2]
 */


//  !Implementation of the Promise.all()
//?here we will not call the Actual API but we will understand it by using the setTimeOut because API also gives response after some time hence 

// ^In Promise.all() the total runtime of the combined promise will be the maximum time any of the promise taking from the list 

// ^As soon as I encounter the rejection from the any promise then the combined promise will also get failed 

// creating  the two functions which are returning the promise 
//first for to fetech user data 
//second for to fetch the user posts from instagram account 

function fetchUserData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            //after 1 second resolve the promise and return the object 
            resolve({userId : 1 , userName : "sanchittanwar7"})

        } , 1000);
    })
}



function fetchUserPosts(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            //after 1 second resolve the promise and return the list 
            resolve(["Post1" , "Post2" , "Post3" , "Post4"]);
            

        } , 3000);
    })
}


// function fetchUserPosts(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             //after 1 second resolve the promise and return the list 
//             // resolve(["Post1" , "Post2" , "Post3" , "Post4"]);
//             reject("Unable to retrive user posts");

//         } , 3000);
//     })
// }


//applying the Promise.all() both the syntax will work 

// Promise.all([fetchUserData() , fetchUserPosts()])
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })

// let combinedPromise = Promise.all([fetchUserData() , fetchUserPosts()])


// combinedPromise
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })




//!Implementation of its polyfil of the Promise.all()            


Promise.myAll = function(promisesArray){
    //Approach 
    //first check that promisesArray should be the Array only 
    //then also check that if the passed array is empty then also I have to throw the error 
    //then I will return the new combined Promise 

        //first check that promisesArray should be the Array only 
        if(Array.isArray(promisesArray) === false){
            throw new Error('Promise.all will performed on the array or list only passing the data in wrong format ')
        }


        //then also check that if the passed array is empty then also I have to throw the error 
        if(promisesArray.length === 0){
            throw new TypeError('Cannot perform the Promise.all on the empty Array')
        }


    //Main Logic 
    //if the all the promises from the list will resolved then only the combined promise will also get resolved or it will also get rejected 
    //take care that do not use the arrow function 

    return new Promise( function(resolve , reject) {








        //I have to store the result of the all the promise then for that creating the one Array 

        let resultArray = [];
        let totalResolvedCount = 0;

        //now iterate over t he All the promises 
        promisesArray.forEach(function(currentPromise , currentIndex){
           //*now I will try to resolve the each promise from the promiseArray 
           Promise.resolve(currentPromise)
                                    .then((result) => {
                                        //then add that result in the result array 
                                        // and also increment the count of the resolved promises 
                                        resultArray[currentIndex] = result;
                                        totalResolvedCount++;

                                        //now check the if total count of the resolved promises becomes == promisesArray.length means all promises are resolved then I have resolve my combined promise also 

                                        if(totalResolvedCount === promisesArray.length){
                                            //then resolve the combinedPromse also 
                                            //and pass the all the result values dtored in the result Array 

                                            resolve(resultArray);
                                        }
                                    })
                                    .catch((error) => {
                                        //means the one promise out of the above list is rejected then combined promise will also get rejected with the error
                                        reject(error);
                                    })
        })
    })
}




//^ Now lets use Promse.myAll() replical That I have created 

let combinedPromse2 = Promise.myAll([fetchUserData() , fetchUserPosts()]);

combinedPromse2
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                })
            