/**
 * 
 * ! 1)Promise.allSettled() : 
**                                      1)here combined promise will always get fullfilled means resolved for Promise.allSettled()
 * *                                    2) but it will return list in that list for each promise it will return the objects 
 * *                                    3) and that each object will have 2 things 
 * &                                                i)status : if that particular promise is resolved then status = resolved else it will be rejected 
 * &                                                ii)result : if that promise is resolved then result = data else result = error
 * 
 * 
 * ^               Syntax = combinedPromise = Promise.allSettled([promise-1 , promise-2]);
 * 
 * 
                * ! return type = [
                * 
                * ^         {status : resolved or reject , result : data / error }    (for promise 1)
                * ^          {status : resolved or reject , result : data / error }    (for promise 2)                
                * ^         {status : resolved or reject , result : data / error }     (for promise 3)

                * ^          ]

 */



// !Actual Implementation of the Promise.allSettled() : 


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
            

//         } , 1000);
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


//apply the promise.allSettled() which will always get resolved so no need to add the catch block


Promise.allSettled([fetchUserData() , fetchUserPosts()])
            .then((result) => {
                console.log(result);  //*this will in the form of the list contain for each promise one object 
            })









