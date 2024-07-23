function fetchUserData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            //after 1 second resolve the promise and return the object 
            reject({userId : 1 , userName : "sanchittanwar7"})

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


//!Now I have to implement my custome .all() method that will return that my combined promise will get resolved or not 

Promise.myAll = function(promisesArray){

    //Approach 
    //first check that it should be the Array only 
    if(Array.isArray(promisesArray) === false){
        throw new Error(promisesArray , ' is not array or list format ');
    }

    //then I have to check it should not be the empty Array 
    if(promisesArray.length === 0){
        throw new TypeError("Promise.all is not possible on Empty Array");
    }

    let resultArray = [];
    let resolvedPromiseCount = 0;

    //Now the main logic 
    //I have to return the combined Promise 
    return new Promise((resolve , reject) => {
        //now I will iterate over the All the promises from the promise Array and try to resolve the each promise one by one 
        promisesArray.forEach((currentPromise , currentIndex) => {
            Promise.resolve(currentPromise)
                                            .then((result) => {
                                                //then I have to add the result in the one Array 
                                                resultArray[currentIndex] = result;
                                                resolvedPromiseCount++;


                                                //Now I have to check that is all the promises are resolved 
                                                if(promisesArray.length === resolvedPromiseCount){
                                                    // then I have to resolve the my combined promise also 
                                                    resolve(resultArray);
                                                }


                                            })
                                            .catch((error) => {
                                                reject(error);
                                            })
        })
    })
}



let combinedPromise = Promise.myAll([fetchUserData() , fetchUserPosts()]);

combinedPromise
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                })